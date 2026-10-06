(function () {
  var list = document.getElementById('week-list');
  var input = document.getElementById('week-search');
  var sortBtn = document.getElementById('week-sort');
  var empty = document.getElementById('no-results');
  if (!list || !input || !sortBtn) return;

  function norm(s) {
    return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }

  var oldestFirst = true;

  sortBtn.addEventListener('click', function () {
    oldestFirst = !oldestFirst;
    var items = Array.prototype.slice.call(list.children).reverse();
    items.forEach(function (li) { list.appendChild(li); });
    sortBtn.textContent = oldestFirst ? 'Mais antigas primeiro' : 'Mais recentes primeiro';
  });

  input.addEventListener('input', function () {
    var q = norm(input.value.trim());
    var shown = 0;
    Array.prototype.forEach.call(list.children, function (li) {
      var ok = !q || norm(li.getAttribute('data-search') || '').indexOf(q) !== -1;
      li.style.display = ok ? '' : 'none';
      if (ok) shown++;
    });
    empty.style.display = shown ? 'none' : 'block';
  });
})();
