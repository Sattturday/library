export default class BurgerMenu {
  constructor({
    burgerClass,
    menuHeaderClass,
    menuLinkClass,
  }) {
    this._burger = document.querySelector(`.${burgerClass}`);
    this._menuHeader = document.querySelector(`.${menuHeaderClass}`);
    this._menuLinks = document.querySelectorAll(`.${menuLinkClass}`);
    this._toggleVisibility = this._toggleVisibility.bind(this);
    this._handleClickLink = this._handleClickLink.bind(this);
    this._burgerActiveClass = `${burgerClass}_active`;
    this._menuHeaderActiveClass = `${menuHeaderClass}_active`;
  }

  _toggleVisibility() {
    this._burger.classList.toggle(this._burgerActiveClass);
    this._menuHeader.classList.toggle(this._menuHeaderActiveClass);
    document.body.classList.toggle('_lock');
  }

  _handleClickLink() {
    if (this._burger.classList.contains(this._burgerActiveClass)) {
      this._toggleVisibility();
    }
  }

  setEventListeners() {
    this._burger.addEventListener('click', this._toggleVisibility);

    if (this._menuLinks.length > 0) {
      this._menuLinks.forEach((link) => {
        link.addEventListener('click', this._handleClickLink);
      });
    }

    this._menuHeader.addEventListener('click', (evt) => {
      if (evt.target.classList.contains(this._menuHeaderActiveClass)) {
        this._toggleVisibility();
      }
    });
  }
}
