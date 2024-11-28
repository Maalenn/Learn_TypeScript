"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Priority;
(function (Priority) {
    Priority[Priority["Low"] = 0] = "Low";
    Priority[Priority["High"] = 1] = "High";
    Priority[Priority["Urgent"] = 2] = "Urgent";
})(Priority || (Priority = {}));
function ticket(problem, priority) {
    if (priority === Priority.Low) {
        console.log("Help me when you free");
    }
    if (priority === Priority.High) {
        console.log("Not now but please help at least today");
    }
    if (priority === Priority.Urgent) {
        console.log("Please help right now...");
    }
}
ticket("error code", Priority.Low);
