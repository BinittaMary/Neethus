const mongoose= require('mongoose');

/**LOCAL BB */
//  mongoose.connect('mongodb://localhost:27017/testimonial',{ useUnifiedTopology: true });

//ATLAS//
// mongoose.connect('');
mongoose.connect('mongodb+srv://userone:userone@cluster0.vcc0q.mongodb.net/ProjectICTKWebsite?retryWrites=true&w=majority');

const Schema = mongoose.Schema;

const TestimonialSchema = new Schema({
name                    : String,
position                : String,
organisation            : String,
testimonial             : String,
course_title            : String,
image                   : String
});

var Testimonialdata = mongoose.model('testimonial',TestimonialSchema);

module.exports = Testimonialdata;