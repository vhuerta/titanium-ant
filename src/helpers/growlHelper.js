import PNotify from 'pnotify';
import 'pnotify/dist/pnotify.history';
import 'pnotify/dist/pnotify.buttons';
import 'pnotify/dist/pnotify.callbacks';
import 'pnotify/dist/pnotify.css';
import 'pnotify/dist/pnotify.buttons.css';

import Styles from 'common/bulma.module.scss';
import i18n from 'i18n';

PNotify.prototype.options.delay = 10e10;
PNotify.prototype.options.mouse_reset = true;
PNotify.prototype.options.destroy = true;
PNotify.prototype.options.history.maxonscreen = 2;
PNotify.prototype.options.buttons.closer_hover = false;
PNotify.prototype.options.buttons.sticker = false;
PNotify.prototype.options.buttons.classes = { closer: 'fa fa-times-circle' };
PNotify.prototype.options.styling = {
  container: Styles.notification,
  notice   : Styles['is-warning'],
  info     : Styles['is-link'],
  success  : Styles['is-success'],
  error    : Styles['is-danger']
};

const options = {};

const types = {
  warning: 'notice',
  info   : 'info',
  success: 'success',
  danger : 'error'
};

const iconTypes = {
  warning: 'fas fa-3x fa-exclamation',
  info   : 'fas fa-3x fa-info',
  success: 'fas fa-3x  fa-check',
  danger : 'fas fa-3x fa-times'
};

export function growl({ title, text, type }) {
  options.title = i18n.t(title ? title : text);
  options.type = types[type];
  options.icon = iconTypes[type];

  if (title && text) options.text = i18n.t(text);

  const notice = new PNotify(options);

  notice.elem[0].addEventListener('click', () => {
    notice.remove();
  });
}
