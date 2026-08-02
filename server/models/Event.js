import mongoose from "mongoose";
import { EVENT_STATUS } from "../constants/eventStatus.js";

const eventSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
            maxlength: 100,
        },

        description: {
            type: String,
            required: true,
        },

        category: {
            type: String,
            required: true,
        },

        banner: {
            type: String,
            default: "",
        },

        venue: {
            type: String,
            required: true,
        },

        startDate: {
            type: Date,
            required: true,
        },

        endDate: {
            type: Date,
            required: true,
        },

        registrationDeadline: {
            type: Date,
            required: true,
        },

        organizer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        isTeamEvent: {
            type: Boolean,
            default: false,
        },

        minTeamSize: {
            type: Number,
            default: 1,
        },

        maxTeamSize: {
            type: Number,
            default: 1,
        },

        maxParticipants: {
            type: Number,
            required: true,
        },

        registrationCount: {
            type: Number,
            default: 0,
        },

        waitlistCount: {
            type: Number,
            default: 0,
        },

        registrationFee: {
            type: Number,
            default: 0,
        },

        prizePool: {
            type: String,
            default: "",
        },

        tags: [
            {
                type: String,
            },
        ],

        status: {
            type: String,
            enum: Object.values(EVENT_STATUS),
            default: EVENT_STATUS.DRAFT,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Event", eventSchema);