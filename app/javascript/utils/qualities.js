// utils function to access the values on a quality

// data structure for reference
// dataStruct = {
//   id: number,
//   name: string, 
//   color: string,
//   description: string,
//   createdAt: string (dateTime),
//   updated_at: string ("2018-08-15T13:59:15.297Z"),
//   score: number (0-100),
// }
import purposeImage from "../../assets/images/qualityIcons/purpose.png";
import empowermentImage from "../../assets/images/qualityIcons/empowerment.png";
import collaborationImage from "../../assets/images/qualityIcons/collaboration.png";

export function getId(data) {
    return data.id;
}
export function getName(data) {
    return data.name;
}
export function getColor(data) {
    return data.color;
}
export function getDescription(data) {
    return data.description;
}
export function getCreatedAt(data) {
    return Date.parse(data.createdAt);
}
export function getUpdatedAt(data) {
    return Date.parse(data.updated_at);
}
export function getScore(data) {
    return data.score;
}
export function getImageUrl(data) {
    var imageUrl = "";
    var name = getName(data);
    if (name  === "Purpose") {
        imageUrl = purposeImage
    } else if (name === "Collaboration") {
        imageUrl = collaborationImage;
    } else if (name === "Empowerment") {
        imageUrl = empowermentImage;
    }
    return imageUrl
}