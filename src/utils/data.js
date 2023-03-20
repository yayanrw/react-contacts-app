let contacts = [
  {
    id: 1,
    name: "Yayan Rahmat Wijaya",
    tag: "yayanrw",
    imageUrl: "/images/yayan1.jpg",
  },
  {
    id: 2,
    name: "Karang Taruna",
    tag: "katar",
    imageUrl: "/images/karangtaruna.png",
  },
  {
    id: 3,
    name: "BPOM Nasional",
    tag: "bpom",
    imageUrl: "/images/bpom.png",
  },
  {
    id: 4,
    name: "Dermatology Nasional",
    tag: "dermatology",
    imageUrl: "/images/dermatology.png",
  },
  {
    id: 5,
    name: "Halalan Toyyibah",
    tag: "halal",
    imageUrl: "/images/halal.png",
  },
];

const getContacts = () => contacts;

const addContact = (contact) => {
  contacts = [
    ...contacts,
    { id: +new Date(), imageUrl: "/images/default.jpg", ...contact },
  ];
};

const deleteContact = (id) => {
  contacts = contacts.filter((contact) => contact.id !== id);
};

export { getContacts, addContact, deleteContact };
