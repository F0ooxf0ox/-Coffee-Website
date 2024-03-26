var giftsetsChoiceButtons = document.querySelectorAll(
  ".section3-giftsets-list-item-button"
);
var giftsetsChoiceButtonsJq = $(".section3--list-item-button");
var giftsetsActiveChoice = 0;
var buttonsDisabled = false;
var giftsetChoicesInfo = {
  0: {
    price: 175,
    icon: "assets/img/section2/box.jpg",
    //   когда применять, надо к имени добавлять giftset " "
    name: "بوكس الاكثر مبيعا",
    description:
      " .ثلاث محاصيل الاكثر مبيعا ,شيري -شيشلي-كاذي",
    nutType: "   ",
    height: "700 - 800",
  },
  1: {
    price: 119,
    icon: "assets/img/section2/box.jpg",
    name: " بوكس التوفير",
    description:
      "                                     وفر اكثر مع بوكس التوفير,فيرونا- سيدراما-حمصه سعوديه         ",
    nutType: "",
    height: "900 - 1000",
  },
  2: {
    price: 220,
    icon: "assets/img/section2/box.jpg",
    name: "بوكس الفاخر",
    description:
      "بوكس يحتوى على ثلاث محاصيل فاخره -شيري -فيكتوريا-شيرى-لتين-",
    nutType: "",
    height: "300 - 400",
  },
};

var updateCurrentChoice = function () {
  if (buttonsDisabled == false) {
    buttonsDisabled = true;

    document.querySelector(
      ".section3-giftsets-info-price"
    ).textContent = `${giftsetChoicesInfo[giftsetsActiveChoice].price}.00 RS`;
    document
      .querySelector(".section3-giftsets-info-price")
      .classList.add("section3-infos-animation-top");

    document.querySelector(
      ".section3-giftsets-img"
    ).src = `${giftsetChoicesInfo[giftsetsActiveChoice].icon}`;
    document
      .querySelector(".section3-giftsets-img")
      .classList.add("section3-infos-animation-left");

    document.querySelector(
      ".section3-giftsets-info-name"
    ).textContent = `${giftsetChoicesInfo[giftsetsActiveChoice].name}`;
    document
      .querySelector(".section3-giftsets-info-name")
      .classList.add("section3-infos-animation-right");

    document.querySelector(
      ".section3-giftsets-info-desc"
    ).textContent = `${giftsetChoicesInfo[giftsetsActiveChoice].description}`;
    document
      .querySelector(".section3-giftsets-info-desc")
      .classList.add("section3-infos-animation-right");

    document
      .querySelectorAll(".section3-giftsets-info-species-item")[0]
      .classList.add("section3-infos-animation-left");
    document
      .querySelectorAll(".section3-giftsets-info-species-item")[1]
      .classList.add("section3-infos-animation-left");

    document.querySelectorAll(
      ".section3-giftsets-info-species-item-info-value"
    )[0].textContent = `${giftsetChoicesInfo[giftsetsActiveChoice].nutType}`;
    document
      .querySelectorAll(".section3-giftsets-info-species-item-info-value")[0]
      .classList.add("section3-infos-animation-bottom");

    document.querySelectorAll(
      ".section3-giftsets-info-species-item-info-value"
    )[1].textContent = `${giftsetChoicesInfo[giftsetsActiveChoice].height}m`;
    document
      .querySelectorAll(".section3-giftsets-info-species-item-info-value")[1]
      .classList.add("section3-infos-animation-bottom");
    // добавить анимации для каждого из элементов которые меняються, когда они меняються чтобы происходила анимация слайда, думаю, это можно сделать применив к ним animation
    setTimeout(() => {
      document
        .querySelector(".section3-giftsets-info-price")
        .classList.remove("section3-infos-animation-top");
      document
        .querySelector(".section3-giftsets-img")
        .classList.remove("section3-infos-animation-left");
      document
        .querySelector(".section3-giftsets-info-name")
        .classList.remove("section3-infos-animation-right");
      document
        .querySelector(".section3-giftsets-info-desc")
        .classList.remove("section3-infos-animation-right");
      document
        .querySelectorAll(".section3-giftsets-info-species-item")[0]
        .classList.remove("section3-infos-animation-left");
      document
        .querySelectorAll(".section3-giftsets-info-species-item")[1]
        .classList.remove("section3-infos-animation-left");
      document
        .querySelectorAll(".section3-giftsets-info-species-item-info-value")[0]
        .classList.remove("section3-infos-animation-bottom");
      document
        .querySelectorAll(".section3-giftsets-info-species-item-info-value")[1]
        .classList.remove("section3-infos-animation-bottom");
      buttonsDisabled = false;
    }, 1500);
  }
};

var giftsetChoosen = function (number) {
  if (buttonsDisabled == false) {
    giftsetsActiveChoice = number - 1;
    console.log(number);
    if (
      giftsetsChoiceButtons[giftsetsActiveChoice].classList.contains(
        "section3-giftsets-list-item-button-active"
      ) == false
    ) {
      console.log(`condition worked, ${giftsetsActiveChoice}`);
      giftsetsChoiceButtonsJq.each(function () {
        $(this).removeClass("section3-giftsets-list-item-button-active");
        console.log(`removing the classes for every, ${number}, ${$(this)}`);
      });
      giftsetsChoiceButtons[giftsetsActiveChoice].classList.add(
        "section3-giftsets-list-item-button-active"
      );
    }
  }

  updateCurrentChoice();
};

var giftsetBuyNow = function (number) {
  console.log(number);
};

// надо сделать функцию апдейта информации про выбранный вид

updateCurrentChoice();
