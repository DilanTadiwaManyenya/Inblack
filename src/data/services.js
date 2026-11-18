import hairStylingImage from "../assets/hair-styling.jpg";
import cutsTrimsImage from "../assets/hair-cut.jpg";
import braidingImage from "../assets/hair-braiding.jpg";
import manicureImage from "../assets/manicure.jpg";
import pedicureImage from "../assets/pedicure.jpg";
import gelNailsImage from "../assets/gel-nails.jpg";
import everydayMakeupImage from "../assets/natural-makeup.jpg";
import bridalMakeupImage from "../assets/bridal-makeup.jpg";
import eventMakeupImage from "../assets/evening-makeup.jpg";
import relaxationMassageImage from "../assets/luxury-massage.jpg";
import deepTissueImage from "../assets/deep-tissue.jpg";
import wellnessSessionImage from "../assets/luxury-massage2.jpg";

export const services = [
  { id: 1, slug: "hair-styling", category: "Hair", name: "Hair Styling", description: "A polished, confidence-building finish for any occasion.", duration: 60, price: "$25", image: hairStylingImage, imageWidth: 683, imageHeight: 1024 },
  { id: 2, slug: "cuts-trims", category: "Hair", name: "Cuts & Trims", description: "Precision shaping tailored to your features and personal style.", duration: 45, price: "$20", image: cutsTrimsImage, imageWidth: 626, imageHeight: 417 },
  { id: 3, slug: "braiding", category: "Hair", name: "Braiding", description: "Protective and expressive styles created with care and detail.", duration: 120, price: "$40", image: braidingImage, imageWidth: 736, imageHeight: 1308 },
  { id: 4, slug: "manicure", category: "Nails", name: "Manicure", description: "Essential nail care with an impeccably finished look.", duration: 45, price: "$20", image: manicureImage, imageWidth: 736, imageHeight: 1288 },
  { id: 5, slug: "pedicure", category: "Nails", name: "Pedicure", description: "Restorative foot and nail care for a refreshed finish.", duration: 60, price: "$25", image: pedicureImage, imageWidth: 736, imageHeight: 736 },
  { id: 6, slug: "gel-nails", category: "Nails", name: "Gel Nails", description: "Long-lasting colour and a clean, luminous polish.", duration: 75, price: "$30", image: gelNailsImage, imageWidth: 736, imageHeight: 1312 },
  { id: 7, slug: "everyday-makeup", category: "Makeup", name: "Everyday Makeup", description: "Natural, elevated makeup that still feels like you.", duration: 45, price: "$25", image: everydayMakeupImage, imageWidth: 736, imageHeight: 777 },
  { id: 8, slug: "bridal-makeup", category: "Makeup", name: "Bridal Makeup", description: "A considered, radiant look for your most meaningful day.", duration: 90, price: "$60", image: bridalMakeupImage, imageWidth: 736, imageHeight: 1307 },
  { id: 9, slug: "event-makeup", category: "Makeup", name: "Event Makeup", description: "Refined glamour for celebrations, parties and photographs.", duration: 60, price: "$40", image: eventMakeupImage, imageWidth: 736, imageHeight: 1093 },
  { id: 10, slug: "relaxation-massage", category: "Massage & Therapy", name: "Relaxation Massage", description: "A soothing reset designed to calm body and mind.", duration: 60, price: "$35", image: relaxationMassageImage, imageWidth: 736, imageHeight: 1104 },
  { id: 11, slug: "deep-tissue", category: "Massage & Therapy", name: "Deep Tissue Massage", description: "Targeted pressure to ease persistent tension and restore ease.", duration: 60, price: "$45", image: deepTissueImage, imageWidth: 236, imageHeight: 314 },
  { id: 12, slug: "wellness-session", category: "Massage & Therapy", name: "Wellness Session", description: "A personalised pause for restoration and self-care.", duration: 60, price: "$35", image: wellnessSessionImage, imageWidth: 736, imageHeight: 736 },
];
