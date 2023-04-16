import mongoose from 'mongoose'

const orderItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
})

const orderSchema = new mongoose.Schema(
  {
    shippingPrice: {
      type: Number,
      required: true,
    },
    itemsPrice: {
      type: Number,
    },
    totalPrice: {
      type: Number,
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    paymentDetails: {
      orderId: { type: String },
      payerId: { type: String },
      status: { type: String },
    },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
    paymentInfo: {
      type: Object,
    },
    orderItems: [orderItemSchema],
    shippingAddress: {
      name: { type: String, required: true },
      address: { type: String, required: true },
      phoneNumber: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model('Order', orderSchema)