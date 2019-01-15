var clicked = false;
var firstClick = false;

function clickHandler() {

// بعد از کلیک کاربر بر روی دکمه متوجه می شویم که اولین کلیک صورت گرفته است پس مقدار آن را این بار برابر true قرار می‌دهیم. همچنین از این به بعد با چک کردن این متغیر می‌توانیم متوجه شویم که یوزر چندمین بار است که کلیک کرده است و اعمال متفاوتی را  برای وی در نظر بگیریم.

firstClick = true;

alert("user first click happend")

}