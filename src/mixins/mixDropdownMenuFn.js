const mixDropdownMenuFn = {
  methods: {
    mixDropdownMenuFn() {
      const dropdownMenuAll = document.querySelectorAll('.js-dropdown-menu--root');

      dropdownMenuAll.forEach((rootDropdownMenu) => {
        rootDropdownMenu.addEventListener('click', (e) => {
          const dropdownMenuButton = e.target.closest('.js-dropdown-menu__button');
          if (dropdownMenuButton) {
            toggleClassActive(dropdownMenuButton);

            function toggleClassActive(elem) {
              const currentMenuItem = elem.parentNode;
              removeClassActive(currentMenuItem);
              currentMenuItem.classList.toggle('js-dropdown-menu__item--active');
            }

            function removeClassActive(currentMenuItem = null) {
              const activeMenuItemsAll = rootDropdownMenu.querySelectorAll('.js-dropdown-menu__item--active');

              activeMenuItemsAll.forEach((menuItem) => {
                let parents = [];
                let currentParent = currentMenuItem.parentNode.closest('.js-dropdown-menu__item--active');

                while (currentParent) {
                  // if (currentParent.classList.contains('js-dropdown-menu--root')) {
                  //   console.log(currentParent);
                  //   break;
                  // }
                  parents.push(currentParent);
                  currentParent = currentParent.parentNode.closest('.js-dropdown-menu__item--active');
                }
                if (menuItem != currentMenuItem && !parents.includes(menuItem)) {
                  menuItem.classList.remove('js-dropdown-menu__item--active');
                }
              });
            }
          }
        });
      });

      // dropdownMenuAll.forEach((dropdownMenu) => {
      //   const dropdownMenuButtonAll = dropdownMenu.querySelectorAll('.js-dropdown-menu__button');

      //   dropdownMenuButtonAll.forEach((dropdownMenuButton) => {

      //     dropdownMenuButton.addEventListener('click', toggleClassActive);

      //     function toggleClassActive(e) {
      //       const currentMenuItem = e.currentTarget.parentNode;
      //       removeClassActive(currentMenuItem);
      //       currentMenuItem.classList.toggle('js-dropdown-menu__item--active');
      //     }

      //     function removeClassActive(currentMenuItem = null) {
      //       const activeMenuItemsAll = dropdownMenu.querySelectorAll('.js-dropdown-menu__item--active');

      //       activeMenuItemsAll.forEach((menuItem) => {
      //         let parents = [];
      //         let currentParent = currentMenuItem.parentNode.closest('.js-dropdown-menu__item--active');

      //         while (currentParent) {
      //           // if (currentParent.classList.contains('js-dropdown-menu--root')) {
      //           //   console.log(currentParent);
      //           //   break;
      //           // }
      //           parents.push(currentParent);
      //           currentParent = currentParent.parentNode.closest('.js-dropdown-menu__item--active');
      //         }
      //         if (menuItem != currentMenuItem && !parents.includes(menuItem)) {
      //           menuItem.classList.remove('js-dropdown-menu__item--active');
      //         }
      //       });
      //     }
      //   });
      // });
    },
  },
};

export default mixDropdownMenuFn;
