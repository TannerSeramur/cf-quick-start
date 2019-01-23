const dirTree = require('directory-tree');
const fs = require('fs-extra');

let manifest = dirTree(`./templates/express-server`);

console.log(manifest);

function copyManifest(mani){
  fs.emptyDir(`${__dirname}/${mani.name}`, err => {
    if (err) return console.error(err);
  });
  mani.children.forEach(child => {
    if(child.children){
      fs.emptyDir(`${__dirname}/${mani.name}/${child.name}`, err => {if (err) return console.error(err);});
      fs.copy(`${__dirname}/templates/${mani.name}/${child.name}`, `${__dirname}/${mani.name}/${child.name}`);
    }
  });
  setTimeout(copySingle, 1000);
}

function copySingle(mani){
  mani.children.forEach(child => {
    if(!child.children){
      fs.copy(`${__dirname}/templates/${mani.name}/${child.name}`, `${__dirname}/${mani.name}`);
    }
  });
}


// if(mani.children)



copyManifest(manifest);
// copySingle();
