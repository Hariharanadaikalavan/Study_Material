let name = "hariharan";

while (name.length > 0) {
    let unitplace = name[0];
    let updatedname = name.replace(new RegExp(unitplace, 'g'), "");
    let count = name.length - updatedname.length;
    console.log(unitplace + "--->" + count);
    name = updatedname;
}
