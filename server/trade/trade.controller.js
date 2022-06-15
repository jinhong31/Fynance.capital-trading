const Trade = require('./trade.model');
const User = require('../user/user.model')
const CronJob = require('cron').CronJob;
const moment = require('moment');
const axios = require('axios');
const { findById } = require('./trade.model');

async function listTrade(req, res) {
  // console.log("dddddddd")
  try {
    const trades = await Trade.find()
    res.status(200).send(trades);
  } catch {
    res.status(400).send(err);
  }
}

async function createTrade(req, res) {
  // var moment = require('moment')
  // console.log(req.body)
  const { tradeType, options, gearing, lifeSpan, entryPrice , userId, margin } = req.body;
  const startTime = Date.now();
  const endTime = Date.now() + lifeSpan * 1000 * 60;
  const premium = margin * options * entryPrice / 100;
  const user = await User.findById(userId);
  const balance = user.balance;
  // console.log(balance) 
  if (balance > premium) {
    try {
      
      // const second = await moment(endTime).second() + 1;
      // const minute = await moment(endTime).minute();
      // const hour = await moment(endTime).hour();
      // const date = await moment(endTime).date();
      // const month = await moment(endTime).month();
      // const string = `${second} ${minute} ${hour} ${date} ${month} *`;
      // console.log(string)
      
      // var job = new CronJob(string, function () {
      //   console.log("dfsfsf")
      //   checkExpire();
      // }, null, true);
      // job.start();
  
      const trade = new Trade({
        userId,
        tradeType,
        options,
        gearing,
        entryPrice,
        startTime,
        endTime
      });
  
      const newTrade = await trade.save();
      user.balance = balance - premium;
      await user.save();
      const data = await Trade.find();
      res.status(200).send(data);
    } catch (err) {
      res.status(400).send({ err: "error" });
    }
  }
}

async function updateTrade(req, res) {
  // console.log(req.body);
  const { _id, outcome, result } = req.body;

  const updateData = await Trade.findByIdAndUpdate(_id, { outcome, result })
  // console.log(updateData)
  const data = await Trade.find();
  res.status(200).send(data)
}
async function checkExpire() {
  const data = await Trade.find()
  try {
    for (var i = 0; i < data.length; i++) {
      if (data[i].endTime <= Date.now() && data[i].isExpired == false) {
        try {
          console.log('check')
          const priceData = await axios.get('https://api.coinbase.com/v2/prices/spot?currency=USD');
          price = priceData.data.data.amount;
          let updateData = await Trade.findById(data[i].id);
          // console.log(updateData)
          const outcome = outcomeFlag(updateData.entryPrice, updateData.tradeType, price);
          const result = Math.trunc(Math.abs((price - updateData.entryPrice) * updateData.options * updateData.gearing));
          updateData.outcome = outcome;
          updateData.result = result;
          updateData.isExpired = true;
          await updateData.save();
          const user = await User.findById(updateData.userId);
          if (outcome == true) {
            user.balance = user.balance + result
          } else {
            user.balance = user.balance - result
          }
          await user.save();
        }
        catch (err) {
          console.log(err)
        }
      }
    }
  }
  catch (err) {
    console.log(err)
  }
}

const outcomeFlag = (entry, trade, price) => {
  if ((entry > price && trade === false) || (entry < price && trade === true)) {
    return true
  } else return false
}
module.exports = { listTrade, createTrade, updateTrade, checkExpire }