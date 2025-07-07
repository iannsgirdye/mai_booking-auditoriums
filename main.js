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
  const loginBtn = document.getElementById('loginBtn');
  const mobileLoginBtn = document.getElementById('mobileLoginBtn');
  const loginModal = document.getElementById('loginModal');
  const closeLoginModal = document.getElementById('closeLoginModal');
  const switchToRegister = document.getElementById('switchToRegister');

  const registerBtn = document.getElementById('registerBtn');
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

  document.querySelectorAll('#loginBtn, #mobileLoginBtn').forEach(btn => {
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

  // Закрытие модальных окон при клике вне их
  window.addEventListener('click', function (e) {
    if (loginModal && e.target === loginModal) {
      loginModal.classList.add('hidden');
    }
    if (registerModal && e.target === registerModal) {
      registerModal.classList.add('hidden');
    }
    if (bookingModal && e.target === bookingModal) {
      bookingModal.classList.add('hidden');
    }
    if (adminModal && e.target === adminModal) {
      adminModal.classList.add('hidden');
    }
  });

  // Модальное окно плана этажа
  const floorPlanBtn = document.getElementById('floorPlanBtn');
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
}); 