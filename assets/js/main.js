$(function () {

  $("#js-hamburger-menu, .navigation__link").click(function () {
    $(".header-sp,.black-bg,.header").toggleClass("active"); //ボタン自身に activeクラスを付与し
  });
  $(".header-sp").click(function () {
    $(".header-sp,.black-bg,.header").toggleClass("active");
    $('.hamburger-menu').toggleClass('hamburger-menu--open');
  });

  // ハンバーガーメニュー
  $(function () {
    $('#js-hamburger-menu, .navigation__link').on('click', function () {
      $('.navigation').slideToggle(500);
      $('.hamburger-menu').toggleClass('hamburger-menu--open')
    });
  });

  // ヘッダー隠れる動き

  // let startPos = 0;
  // let winScrollTop = 0;
  // const Header = $('.header');
  // $(window).on('scroll', function () {
  //   winScrollTop = $(this).scrollTop();
  //   if (winScrollTop >= startPos && winScrollTop > 100) { // ここにコードを追加
  //     $(Header).addClass('is-hide');
  //   } else {
  //     $(Header).removeClass('is-hide');
  //   }
  //   startPos = winScrollTop;
  // });


  // ヘッダーに色つける
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 300) {
      $(".header").addClass("scrolled");
    } else {
      $(".header").removeClass("scrolled");
    }
  });

  // トップまで戻る
  $('.footer__top-btn').on('click', function (e) {
    e.preventDefault(); // リンクのデフォルト動作を無効化（必要に応じて）
    $('html, body').animate({
      scrollTop: 0
    }, 500); // 500ミリ秒かけてトップへスクロール
  });


  //フェードイン
  $(window).scroll(function () {
    $('.fadein-anime,.fadein-anime02,.fadein-anime03,.fadein-anime04').each(function () {
      var pos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var wHeight = $(window).height();
      if (scroll > pos - wHeight + wHeight / 100) {
        $(this).addClass('active');
      }
    });
  });


  $(window).scroll(function () {
    $('.fadein-anime03,.fadein-anime04').each(function () {
      var pos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var wHeight = $(window).height();
      if (scroll > pos - wHeight + wHeight / 200) {
        $(this).addClass('active');
      }
    });
  });


  // 業務内容スクロールで表示
  $(window).on('scroll', function() {
    $('.services-item-js').each(function() {
      const elemTop = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();

      if (scroll > elemTop - windowHeight + 100) {
        $(this).addClass('show');
      }
    });
  });

  // 初回読み込み時にも実行
  $(window).trigger('scroll');


  $(function () {
    var headerHeight = 40; // ヘッダーの高さ
    $('a[href^="#"]').click(function () {
      var speed = 500;
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top - headerHeight;
      $("html, body").animate({
        scrollTop: position
      }, speed, "swing");
      return false;
    });
  });



  // 会社概要ポップアップ
  $("#company-popup").click(function () {
    $("#popup-container").fadeIn(); // フェードインで表示
  });

  $("#close-popup").click(function () {
    $("#popup-container").fadeOut(); // フェードアウトで非表示
  });

  // ポップアップの外側をクリックしても閉じるようにする場合 (任意)
  $("#popup-container").click(function (event) {
    if (event.target === this) {
      $(this).fadeOut();
    }
  });

  // 業務内容ポップアップ
  $("#services-popup,#services-popup02").click(function () {
    $("#popup-container").fadeIn(); // フェードインで表示
  });

  $("#close-popup").click(function () {
    $("#popup-container").fadeOut(); // フェードアウトで非表示
  });

  // ポップアップの外側をクリックしても閉じるようにする場合 (任意)
  $("#popup-container").click(function (event) {
    if (event.target === this) {
      $(this).fadeOut();
    }
  });

     // リクルートページポップアップ
     for (let i = 1; i <= 4; i++) {
      $(`.recruit-popup-btn0${i}`).on('click', function() {
        $(`#popup-container0${i}`).fadeIn();
      });
    }

    // 閉じる処理（共通）
    $('.close-popup').on('click', function() {
      $(this).closest('.popup-container').fadeOut();
    });


    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 30) {
        $(".header").addClass("active");
      } else {
        $(".header").removeClass("active");
      };
      if ($(window).scrollTop() > 30) {
        $(".header__breadcrumb-wrap").addClass("active");
      } else {
        $(".header__breadcrumb-wrap").removeClass("active");
      }
    });

})