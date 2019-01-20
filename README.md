# Monthly Budget Telegram Bot

This is my personal bot that I'll use for managing spendings.
It's currently not working because I haven't implemented the
sheets api yet.

## Install

Clone this repo and run `npm install` in the root directory.
Then place a config.json inside the root directory with 
the following content:

```json
{
  "token": "Your bot token",
  "userId": Your User ID as a number,
}
```

Then create a new google sheet using the `sheets_template.ods`
inside resources folder. It's just a copy of the
`Monthly Budget` template in Google Sheets, it's not been
created by me.
