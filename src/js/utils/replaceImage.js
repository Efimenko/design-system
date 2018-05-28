export default (node, newImage) => {
  node.querySelector('img').setAttribute('src', newImage);
  node.querySelector('source').setAttribute('srcset', newImage);
}