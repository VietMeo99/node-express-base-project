"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendAnimation = exports.getTelegramPage = exports.handlePushTelegramNotification = exports.getHomePage = void 0;
const telegramService = __importStar(require("../services/telegramService"));
const getHomePage = (req, res) => {
    // return res.render("homepage.ejs");
    return res.send("Express TS on Vercel");
};
exports.getHomePage = getHomePage;
// const handlePushTelegramNotification = async (req: any, res?: any) => {
const handlePushTelegramNotification = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //send notification to telegram
    // const msg = `Fullname: <b>${user.fullName}</b>
    //       Description: <i>${user.description}</i>
    // `;
    yield telegramService.sendNotification(req.body);
    //then redirect to the telegram page
    return res === null || res === void 0 ? void 0 : res.redirect("/telegram");
});
exports.handlePushTelegramNotification = handlePushTelegramNotification;
const getTelegramPage = (req, res) => {
    return res.render("telegram.ejs");
};
exports.getTelegramPage = getTelegramPage;
const sendAnimation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield telegramService.sendMeAGif();
    return res.redirect("/");
});
exports.sendAnimation = sendAnimation;
//# sourceMappingURL=homepageController.js.map