import LongTxt from "./LongTxt.js";

export default {
  props: ["book"],
  template: `
        <section class="book-details">
            <h1>Title: {{ book.title }}</h1>
            <h2>Author: {{authors}}</h2>
            <p>Published Date:{{book.publishedDate }}{{handleDateState}}</p>
            <longTxt :txt-"book.description"/>
            <h3>PageCount: {{this.book.pageCount}}{{handleReadingState}}</h3>
            <h3> Categories: {{book.categories[0]}}</h3>
            <img :src=book.thumbnail alt="">
            <h3>Language: {{book.language}}</h3>
            <th :class="handleMountClass" scope="col">{{price}}</th>
            <button @click="closeDetails">Close</button>

        </section>
    `,
  methods: {
    closeDetails() {
      this.$emit("hide-details");
    },
  },
  computed: {
    price() {
      return (
        "Price: " +
        new Intl.NumberFormat("en", {
          style: "currency",
          currency: this.book.listPrice.currencyCode,
        }).format(this.book.listPrice.amount)
      );
    },
    handleReadingState() {
      const currCount = this.book.pageCount;
      if (currCount >= 500) return ", Serious Reading...";
      if (currCount >= 200) return ", Descent Reading...";
      if (currCount < 100) return ", Light Reading...";
    },
    handleDateState() {
      const currYear = new Date().getFullYear();
      if (currYear - 10 > this.book.publishedDate) return ",Vintage";
      if (currYear - 1 > this.book.publishedDate) return ",New";
    },
    handleAmountClass() {
      const currAmount = this.book.listPrice.amount;
      return { red: currAmount > 150, green: currAmount < 20 };
    },
    HandleSale() {
      const onSale = this.book.listPrice.isOnSale;
      if (onSale) return onSale + "💲💲💲";
      else return;
    },
    authors() {
      return this.book.authors.join(", ");
    },
  },
  components: {
    LongTxt,
  },
};
