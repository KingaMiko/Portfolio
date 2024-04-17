export {};
import $ from "jquery";

let activeIndex: number = 0;
let limit: number = 0;
let disabled: boolean = false;
let $stage: JQuery<HTMLElement>;
let $controls: JQuery;
let canvas: HTMLCanvasElement | null = null;

const SPIN_FORWARD_CLASS: string = "js-spin-fwd";
const SPIN_BACKWARD_CLASS: string = "js-spin-bwd";
const DISABLE_TRANSITIONS_CLASS: string = "js-transitions-disabled";
const SPIN_DUR: number = 1000;

const appendControls = (): void => {
  for (let i = 0; i < limit; i++) {
    $(".carousel__control").append(`<a href="#" data-index="${i}"></a>`);
  }
  let height: number =
    $(".carousel__control").children().last().outerHeight() || 0;

  $(".carousel__control").css("height", 30 + limit * height);
  $controls = $(".carousel__control").children();
  $controls.eq(activeIndex).addClass("active");
};

const setIndexes = (): void => {
  $(".spinner")
    .children()
    .each((i, el) => {
      $(el).attr("data-index", i.toString());
      limit++;
    });
};

const duplicateSpinner = (): void => {
  const $el = $(".spinner").parent();
  const html = $(".spinner").parent().html() || "";
  $el.append(html);
  $(".spinner").last().addClass("spinner--right");
  $(".spinner--right").removeClass("spinner--left");
};

const paintFaces = (): void => {
  $(".spinner__face").each((i, el) => {
    const $el = $(el);
    let color: string = $el.attr("data-bg") || "";
    $el
      .children()
      .css("backgroundImage", `url(${getBase64PixelByColor(color)})`);
  });
};

const getBase64PixelByColor = (hex: string): string | false => {
  if (!canvas) {
    canvas = document.createElement("canvas");
    canvas.height = 1;
    canvas.width = 1;
  }
  const ctx = canvas.getContext("2d");
  if (ctx) {
    ctx.fillStyle = hex;
    ctx.fillRect(0, 0, 1, 1);
    return canvas.toDataURL();
  }
  return false;
};

const prepareDom = (): void => {
  setIndexes();
  paintFaces();
  duplicateSpinner();
  appendControls();
};

const spin = (inc: number = 1): void => {
  if (disabled || inc === 0) return;
  activeIndex += inc;
  disabled = true;

  if (activeIndex >= limit) {
    activeIndex = 0;
  } else if (activeIndex < 0) {
    activeIndex = limit - 1;
  }

  const $nextEls = $(`.spinner__face[data-index=${activeIndex}]`);
  $nextEls.addClass("js-next");

  if (inc > 0) {
    $stage.addClass(SPIN_FORWARD_CLASS);
  } else {
    $stage.addClass(SPIN_BACKWARD_CLASS);
  }

  $controls.removeClass("active");
  $controls.eq(activeIndex).addClass("active");

  setTimeout(() => {
    spinCallback(inc);
  }, SPIN_DUR);
};

const spinCallback = (inc: number): void => {
  $(".js-active").removeClass("js-active");
  $(".js-next").removeClass("js-next").addClass("js-active");
  $stage
    .addClass(DISABLE_TRANSITIONS_CLASS)
    .removeClass(SPIN_FORWARD_CLASS)
    .removeClass(SPIN_BACKWARD_CLASS);

  $(".js-active").each((i, el) => {
    const $el = $(el);
    $el.prependTo($el.parent());
  });
  setTimeout(() => {
    $stage.removeClass(DISABLE_TRANSITIONS_CLASS);
    disabled = false;
  }, 100);
};

const attachListeners = (): void => {
  document.onkeyup = (e: KeyboardEvent) => {
    switch (e.keyCode) {
      case 38: // Up arrow
        spin(-1);
        break;
      case 40: // Down arrow
        spin(1);
        break;
    }
  };

  $controls.on("click", (e: JQuery.ClickEvent) => {
    e.preventDefault();
    if (disabled) return;
    const $el = $(e.currentTarget);
    const toIndex = parseInt($el.attr("data-index") || "0", 10);
    spin(toIndex - activeIndex);
  });
};

const assignEls = (): void => {
  $stage = $(".carousel__stage");
};

const init = (): void => {
  assignEls();
  prepareDom();
  attachListeners();
};

$(init);
