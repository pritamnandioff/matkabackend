/** @format */

const mongoose = require("mongoose");

const settingSchema = new mongoose.Schema(
    {
        deposit: {
            min: {
                type: Number,
                required: true,
            },
            max: {
                type: Number,
                required: true,
            },
        },
        withdraw: {
            min: {
                type: Number,
                required: true,
            },
            max: {
                type: Number,
                required: true,
            },
        },
        transfer: {
            min: {
                type: Number,
                required: true,
            },
            max: {
                type: Number,
                required: true,
            },
        },
        betting: {
            min: {
                type: Number,
                required: true,
            },
            max: {
                type: Number,
                required: true,
            },
        },
        withdrawl_off_day: {
            monday: {
                type: Boolean,
                required: true,
            },
            tuesday: {
                type: Boolean,
                required: true,
            },
            wednesday: {
                type: Boolean,
                required: true,
            },
            thursday: {
                type: Boolean,
                required: true,
            },
            friday: {
                type: Boolean,
                required: true,
            },
            saturday: {
                type: Boolean,
                required: true,
            },
            sunday: {
                type: Boolean,
                required: true,
            },
        },
        authentication: {
            otp: {
                type: String,
                default: "",
            },
            time: {
                type: Date,
                default: Date.now,
            },
        },
        name: {
            type: String,
            required: true,
        },
        referral_bonus: {
            type: Number,
            default: 0,
        },
        joining_bonus: {
            type: Number,
            default: 0,
        },
        merchant_name: {
            type: String,
            required: true,
        },
        merchant_upi: {
            type: String,
            required: true,
        },
        withdraw_open: {
            type: String,
            required: true,
        },
        withdraw_close: {
            type: String,
            required: true,
        },
        app_link: {
            type: String,
        },
        web_link: {
            type: String,
        },
        share_message: {
            type: String,
        },
        maintainence: {
            type: Boolean,
            default: false,
        },
        maintainence_msg: {
            type: String,
            default: "",
        },
        app_version: {
            type: String,
            default: "1.0.0",
        },
        app_version_req: {
            type: Boolean,
            default: false,
        },
        mobile: {
            type: String,
            required: true,
        },
        telegram: {
            type: String,
        },
        auto_verified: {
            type: Boolean,
            default: false,
        },
        auto_notification: {
            type: Boolean,
            default: true,
        },
        merchant_qr: {
            type: String,
            default: "-",
        },
        whatsapp: {
            type: String,
            default: "-",
        },
        whatsapp_text: {
            type: String,
            default: "-",
        },
        email_1: {
            type: String,
            default: "-",
        },
        email_2: {
            type: String,
            default: "-",
        },
        facebook: {
            type: String,
            default: "-",
        },
        twitter: {
            type: String,
            default: "-",
        },
        youtube: {
            type: String,
        },
        instagram: {
            type: String,
            default: "-",
        },
        privacy_policy: {
            type: String,
        },
        welcome_text: {
            type: String,
            default: "Welcome to the game!",
        },
        video_link: {
            type: String,
            default: "-",
        },
        upi_pay: {
            type: Boolean,
            default: true,
        },
        qr_pay: {
            type: Boolean,
            default: true,
        },
        reset_time: {
            type: String,
            required: true,
        },
        rates: {
            starline: {
                single_digit_1: String,
                single_digit_2: String,
                single_panna_1: String,
                single_panna_2: String,
                double_panna_1: String,
                double_panna_2: String,
                tripple_panna_1: String,
                tripple_panna_2: String,
                even_odd_digit_1: String,
                even_odd_digit_2: String,
            },
            main: {
                single_digit_1: String,
                single_digit_2: String,
                jodi_digit_1: String,
                jodi_digit_2: String,
                single_panna_1: String,
                single_panna_2: String,
                double_panna_1: String,
                double_panna_2: String,
                tripple_panna_1: String,
                tripple_panna_2: String,
                half_sangum_1: String,
                half_sangum_2: String,
                full_sangum_1: String,
                full_sangum_2: String,
                even_odd_digit_1: String,
                even_odd_digit_2: String,
                double_even_odd_1: String,
                double_even_odd_2: String,
            },
            galidisawar: {
                jodi_digit_1: String,
                jodi_digit_2: String,
                left_digit_1: String,
                left_digit_2: String,
                right_digit_1: String,
                right_digit_2: String,
            },
        },
        webtoggle: {
            type: Boolean,
            default: false,
        },
        web_app_link: {
            type: String,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Settings", settingSchema);
