const extendsProtorype = {
  mounted() {
    HTMLElement.prototype.getNodesByText = function (text) {
      const expr = `.//*[text()[contains(
          translate(.,
            'ABCDEFGHIJKLMNOPQRSTUVWXYZАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ',
            'abcdefghijklmnopqrstuvwxyzабвгдеёжзийклмнопрстуфхцчшщъыьэюя'
          ),
          '${text.toLowerCase()}'
        )]]`; /* коммент-костыль */
      const nodeSet = document.evaluate(expr, this, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
      return Array.from({ length: nodeSet.snapshotLength }, (v, i) => nodeSet.snapshotItem(i));
    };
  },
};

export default extendsProtorype;
