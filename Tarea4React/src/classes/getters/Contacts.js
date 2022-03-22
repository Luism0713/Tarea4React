export default class Contacts {
  site = "http://www.raydelto.org/agenda.php";
  items = [];
  //Object en
  contact = {
    name: "",
    l_name: "",
    tel: "",
    get telPhone() {
      return this.tel;
    },
    set telPhone(valueNew) {
      //Remove the (-) if exists
      valueNew = valueNew.split("-").join("");

      //   console.log (valueNew);

      if (valueNew.length >= 10) {
        this.tel =
          valueNew.substring(0, 3) +
          "-" +
          valueNew.substring(3, 6) +
          "-" +
          valueNew.substring(6, 10);
      } else {
        this.tel = undefined;
      }
    },
    get() {
      return {
        nombre: this.name,
        apellido: this.l_name,
        telefono: this.telPhone,
      };
    },
  };
  async sendContact(name, lName, tels) {
    //Set the values
    const nContact = this.contact;
    nContact.name = name;
    nContact.l_name = lName;
    nContact.telPhone = tels;

    if (nContact.tel == undefined) {
      return false;
    }

    const response = await fetch(this.site, {
      //Send the data
      method: "POST",
      body: JSON.stringify(nContact.get()),
    });
    return response.ok;
  }
  async getContact(){
    const contactos = await fetch(this.site);
    const contact = await contactos.json();
    return Array.from(contact);
  }
}

// const ls = new Contacts();

// let value = ls.contact;

// // value.name = "100";
// // value.l_name = "100";
// // value.telPhone = "8092122133928133";

// console.log(value.get());
