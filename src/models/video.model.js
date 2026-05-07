import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new mongoose.Schema(
  {
    videoFile: {
      type: String, // this will be a link which will stored in cloudinary / aws
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    tittle: {
      type: String,
      required: true,
    },
    descripton: {
      type: String,
      required: true,
    },
    duration: {
      type: Number, // duration will be cloudinary
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },

    isPublished: {
      type: Boolean,
      default: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video", videoSchema);
