document.addEventListener('DOMContentLoaded', function() {
  const elems = document.querySelectorAll('.sidenav');
  const instances = M.Sidenav.init(elems, {});
});
document.addEventListener('DOMContentLoaded', function() {
  const elems = document.querySelectorAll('.materialboxed');
  const instances = M.Materialbox.init(elems, {});
});
document.addEventListener('DOMContentLoaded', function() {
  const elems = document.querySelectorAll('.parallax');
  const instances = M.Parallax.init(elems, {});
});
document.addEventListener('DOMContentLoaded', function() {
  const elems = document.querySelectorAll('.tabs');
  const instances = M.Tabs.init(elems, {});
});
document.addEventListener('DOMContentLoaded', function() {
  const elems = document.querySelectorAll('.datepicker');
  const instances = M.Datepicker.init(elems, {});
});
document.addEventListener('DOMContentLoaded', function() {
  const elems = document.querySelectorAll('.timepicker');
  const instances = M.Timepicker.init(elems, {});
});
document.addEventListener('DOMContentLoaded', function() {
  const elems = document.querySelectorAll('.tooltipped');
  const instances = M.Tooltip.init(elems, {});
});
document.addEventListener('DOMContentLoaded', function() {
  const elems = document.querySelectorAll('.scrollspy');
  const instances = M.ScrollSpy.init(elems, {});
});

const year = new Date();
document.querySelector('.year').textContent = year.getFullYear();