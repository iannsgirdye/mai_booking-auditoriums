// Обработчики модальных окон

document.addEventListener('DOMContentLoaded', function () {
  // Мобильное меню
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Фильтры на мобильных устройствах
  const filterToggle = document.getElementById('filterToggle');
  const sidebar = document.getElementById('sidebar');

  if (filterToggle && sidebar) {
    filterToggle.addEventListener('click', function () {
      sidebar.classList.toggle('hidden');
      sidebar.classList.toggle('open');
    });
  }

  // Модальное окно входа
  const loginBtn = document.getElementById('button-login');
  const mobileLoginBtn = document.getElementById('mobileLoginBtn');
  const loginModal = document.getElementById('loginModal');
  const closeLoginModal = document.getElementById('closeLoginModal');
  const switchToRegister = document.getElementById('switchToRegister');

  const registerBtn = document.getElementById('button-register');
  const mobileRegisterBtn = document.getElementById('mobileRegisterBtn');
  const registerModal = document.getElementById('registerModal');
  const closeRegisterModal = document.getElementById('closeRegisterModal');
  const switchToLogin = document.getElementById('switchToLogin');

  function openLoginModal() {
    if (loginModal && registerModal) {
      loginModal.classList.remove('hidden');
      registerModal.classList.add('hidden');
    }
  }

  function openRegisterModal() {
    if (registerModal && loginModal) {
      registerModal.classList.remove('hidden');
      loginModal.classList.add('hidden');
    }
  }

  if (loginBtn) loginBtn.addEventListener('click', openLoginModal);
  if (mobileLoginBtn) mobileLoginBtn.addEventListener('click', openLoginModal);
  if (registerBtn) registerBtn.addEventListener('click', openRegisterModal);
  if (mobileRegisterBtn) mobileRegisterBtn.addEventListener('click', openRegisterModal);

  if (closeLoginModal && loginModal) {
    closeLoginModal.addEventListener('click', function () {
      loginModal.classList.add('hidden');
    });
  }
  if (closeRegisterModal && registerModal) {
    closeRegisterModal.addEventListener('click', function () {
      registerModal.classList.add('hidden');
    });
  }

  if (switchToRegister && loginModal && registerModal) {
    switchToRegister.addEventListener('click', function () {
      loginModal.classList.add('hidden');
      registerModal.classList.remove('hidden');
    });
  }
  if (switchToLogin && registerModal && loginModal) {
    switchToLogin.addEventListener('click', function () {
      registerModal.classList.add('hidden');
      loginModal.classList.remove('hidden');
    });
  }

  // Модальное окно бронирования
  const roomCards = document.querySelectorAll('.auditorium-card');
  const bookingModal = document.getElementById('bookingModal');
  const closeBookingModal = document.getElementById('closeBookingModal');
  const cancelBooking = document.getElementById('cancelBooking');

  if (roomCards && bookingModal) {
    roomCards.forEach(card => {
      card.addEventListener('click', function () {
        // Если карточка содержит кнопку с классом 'cursor-not-allowed', не открывать модалку
        if (card.querySelector('.cursor-not-allowed')) return;
        bookingModal.classList.remove('hidden');
      });
    });
  }

  if (closeBookingModal && bookingModal) {
    closeBookingModal.addEventListener('click', function () {
      bookingModal.classList.add('hidden');
    });
  }
  if (cancelBooking && bookingModal) {
    cancelBooking.addEventListener('click', function () {
      bookingModal.classList.add('hidden');
    });
  }

  // Модальное окно администратора (для демонстрации)
  const adminModal = document.getElementById('adminModal');
  const closeAdminModal = document.getElementById('closeAdminModal');

  document.querySelectorAll('#button-login, #mobileLoginBtn').forEach(btn => {
    btn.addEventListener('dblclick', function () {
      if (adminModal) adminModal.classList.remove('hidden');
    });
  });

  if (closeAdminModal && adminModal) {
    closeAdminModal.addEventListener('click', function () {
      adminModal.classList.add('hidden');
    });
  }

  // Уведомление
  const notification = document.getElementById('notification');

  // Демонстрация уведомления при отправке заявки
  if (bookingModal) {
    const bookingForm = bookingModal.querySelector('form');
    if (bookingForm && notification) {
      bookingForm.addEventListener('submit', function (e) {
        e.preventDefault();
        bookingModal.classList.add('hidden');
        notification.classList.remove('hidden');
        setTimeout(() => {
          notification.classList.add('hidden');
        }, 3000);
      });
    }
  }

  // Модальное окно плана этажа
  const floorPlanBtn = document.getElementById('floorPlanBtn');
  const headerMapBtn = document.getElementById('button-map');
  const floorPlanModal = document.getElementById('floorPlanModal');
  const closeFloorPlanModal = document.getElementById('closeFloorPlanModal');

  if (floorPlanBtn && floorPlanModal) {
    floorPlanBtn.addEventListener('click', function () {
      floorPlanModal.classList.remove('hidden');
    });
  }
  if (closeFloorPlanModal && floorPlanModal) {
    closeFloorPlanModal.addEventListener('click', function () {
      floorPlanModal.classList.add('hidden');
    });
  }
  window.addEventListener('click', function (e) {
    if (floorPlanModal && e.target === floorPlanModal) {
      floorPlanModal.classList.add('hidden');
    }
  });

  // Блокировка скролла при открытии модального окна и возврат при закрытии всех
  function openModal(modal) {
    if (modal) {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  }
  function closeModal(modal) {
    if (modal) {
      modal.classList.add('hidden');
      // Проверяем, есть ли еще открытые модальные окна
      const anyOpen = [loginModal, registerModal, bookingModal, adminModal, floorPlanModal].some(m => m && !m.classList.contains('hidden'));
      if (!anyOpen) {
        document.body.style.overflow = '';
      }
    }
  }

  // --- Новый код для единого модального окна ---
  const authModal = document.getElementById('authModal');
  const closeAuthModal = document.getElementById('closeAuthModal');
  const authTabLogin = document.getElementById('authTabLogin');
  const authTabRegister = document.getElementById('authTabRegister');
  const authLoginForm = document.getElementById('authLoginForm');
  const authRegisterForm = document.getElementById('authRegisterForm');

  function setAuthTab(tab) {
    if (tab === 'login') {
      authTabLogin.classList.add('modal__tab--active');
      authTabRegister.classList.remove('modal__tab--active');
      authLoginForm.classList.remove('hidden');
      authRegisterForm.classList.add('hidden');
    } else {
      authTabLogin.classList.remove('modal__tab--active');
      authTabRegister.classList.add('modal__tab--active');
      authLoginForm.classList.add('hidden');
      authRegisterForm.classList.remove('hidden');
    }
  }

  if (authTabLogin && authTabRegister) {
    authTabLogin.addEventListener('click', function() { setAuthTab('login'); });
    authTabRegister.addEventListener('click', function() { setAuthTab('register'); });
  }

  function openAuthModal(tab) {
    if (authModal) {
      openModal(authModal);
      setAuthTab(tab);
    }
  }
  if (loginBtn) loginBtn.addEventListener('click', function() { openAuthModal('login'); });
  if (mobileLoginBtn) mobileLoginBtn.addEventListener('click', function() { openAuthModal('login'); });
  if (registerBtn) registerBtn.addEventListener('click', function() { openAuthModal('register'); });
  if (mobileRegisterBtn) mobileRegisterBtn.addEventListener('click', function() { openAuthModal('register'); });
  if (closeAuthModal && authModal) {
    closeAuthModal.addEventListener('click', function () {
      closeModal(authModal);
    });
  }

  // --- Конец нового кода ---

  // --- Старые обработчики для loginModal и registerModal (можно удалить позже) ---
  /*
  if (loginBtn) loginBtn.addEventListener('click', function() { openModal(loginModal); closeModal(registerModal); });
  if (mobileLoginBtn) mobileLoginBtn.addEventListener('click', function() { openModal(loginModal); closeModal(registerModal); });
  if (registerBtn) registerBtn.addEventListener('click', function() { openModal(registerModal); closeModal(loginModal); });
  if (mobileRegisterBtn) mobileRegisterBtn.addEventListener('click', function() { openModal(registerModal); closeModal(loginModal); });

  if (closeLoginModal && loginModal) {
    closeLoginModal.addEventListener('click', function () {
      closeModal(loginModal);
    });
  }
  if (closeRegisterModal && registerModal) {
    closeRegisterModal.addEventListener('click', function () {
      closeModal(registerModal);
    });
  }
  if (switchToRegister && loginModal && registerModal) {
    switchToRegister.addEventListener('click', function () {
      closeModal(loginModal);
      openModal(registerModal);
    });
  }
  if (switchToLogin && registerModal && loginModal) {
    switchToLogin.addEventListener('click', function () {
      closeModal(registerModal);
      openModal(loginModal);
    });
  }
  */

  if (roomCards && bookingModal) {
    roomCards.forEach(card => {
      card.addEventListener('click', function () {
        if (card.querySelector('.cursor-not-allowed')) return;
        openModal(bookingModal);
      });
    });
  }
  if (closeBookingModal && bookingModal) {
    closeBookingModal.addEventListener('click', function () {
      closeModal(bookingModal);
    });
  }
  if (cancelBooking && bookingModal) {
    cancelBooking.addEventListener('click', function () {
      closeModal(bookingModal);
    });
  }

  document.querySelectorAll('#button-login, #mobileLoginBtn').forEach(btn => {
    btn.addEventListener('dblclick', function () {
      openModal(adminModal);
    });
  });
  if (closeAdminModal && adminModal) {
    closeAdminModal.addEventListener('click', function () {
      closeModal(adminModal);
    });
  }

  if (floorPlanBtn && floorPlanModal) {
    floorPlanBtn.addEventListener('click', function () {
      openModal(floorPlanModal);
    });
  }
  if (headerMapBtn && floorPlanModal) {
    headerMapBtn.addEventListener('click', function () {
      openModal(floorPlanModal);
    });
  }
  if (closeFloorPlanModal && floorPlanModal) {
    closeFloorPlanModal.addEventListener('click', function () {
      closeModal(floorPlanModal);
    });
  }

  const navBurger = document.getElementById('navBurger');
  if (navBurger && mobileMenu) {
    navBurger.addEventListener('click', function () {
      if (mobileMenu.hasAttribute('hidden')) {
        mobileMenu.removeAttribute('hidden');
      } else {
        mobileMenu.setAttribute('hidden', '');
      }
    });
  }

  const mobileMapBtn = document.getElementById('mobileMapBtn');
  if (mobileLoginBtn) {
    mobileLoginBtn.addEventListener('click', function () {
      openAuthModal('login');
      if (mobileMenu) mobileMenu.setAttribute('hidden', '');
    });
  }
  if (mobileMapBtn) {
    mobileMapBtn.addEventListener('click', function () {
      openModal(floorPlanModal);
      if (mobileMenu) mobileMenu.setAttribute('hidden', '');
    });
  }
}); 