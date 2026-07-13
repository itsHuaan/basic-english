(function () {
  'use strict';

  var root = document.documentElement;

  /* ---------------------------------------------------------
     THEME TOGGLE (in-memory only — no storage APIs used)
     --------------------------------------------------------- */
  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
  }
  function toggleTheme() {
    var current = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(current);
  }
  var themeBtns = [
    document.getElementById('themeToggleDesktop'),
    document.getElementById('themeToggleMobile')
  ];
  themeBtns.forEach(function (btn) {
    if (btn) btn.addEventListener('click', toggleTheme);
  });

  /* respect OS preference on first load */
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme('dark');
  }

  /* ---------------------------------------------------------
     MOBILE DRAWER
     --------------------------------------------------------- */
  var sidebar = document.getElementById('sidebar');
  var drawerToggle = document.getElementById('drawerToggle');
  var drawerScrim = document.getElementById('drawerScrim');

  function openDrawer() {
    sidebar.classList.add('is-open');
    drawerScrim.classList.add('is-open');
    drawerToggle.setAttribute('aria-expanded', 'true');
  }
  function closeDrawer() {
    sidebar.classList.remove('is-open');
    drawerScrim.classList.remove('is-open');
    drawerToggle.setAttribute('aria-expanded', 'false');
  }
  if (drawerToggle) {
    drawerToggle.addEventListener('click', function () {
      var isOpen = sidebar.classList.contains('is-open');
      isOpen ? closeDrawer() : openDrawer();
    });
  }
  if (drawerScrim) drawerScrim.addEventListener('click', closeDrawer);

  /* close drawer when a nav link is tapped (mobile) */
  document.querySelectorAll('.toc__list a').forEach(function (link) {
    link.addEventListener('click', function () {
      if (window.innerWidth <= 900) closeDrawer();
    });
  });

  /* ---------------------------------------------------------
     DESKTOP SIDEBAR TOGGLE
     --------------------------------------------------------- */
  var sidebarToggle = document.getElementById('sidebarToggle');
  var appShell = document.querySelector('.app-shell');
  if (sidebarToggle && appShell) {
    sidebarToggle.addEventListener('click', function () {
      appShell.classList.toggle('is-collapsed');
    });
  }

  /* ---------------------------------------------------------
     ACCORDION
     --------------------------------------------------------- */
  document.querySelectorAll('[data-accordion]').forEach(function (accordion) {
    accordion.querySelectorAll('.accordion-item__btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var expanded = btn.getAttribute('aria-expanded') === 'true';
        var panel = btn.nextElementSibling;
        btn.setAttribute('aria-expanded', String(!expanded));
        panel.style.maxHeight = expanded ? null : panel.scrollHeight + 'px';
      });
    });
  });

  /* ---------------------------------------------------------
     TABS
     --------------------------------------------------------- */
  document.querySelectorAll('[data-tabs]').forEach(function (tabGroup) {
    var buttons = tabGroup.querySelectorAll('.tabs__btn');
    var panels = tabGroup.querySelectorAll('.tabs__panel');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var target = btn.getAttribute('data-tab');
        buttons.forEach(function (b) {
          b.classList.toggle('is-active', b === btn);
          b.setAttribute('aria-selected', String(b === btn));
        });
        panels.forEach(function (p) {
          p.classList.toggle('is-active', p.getAttribute('data-panel') === target);
        });
      });
    });
  });

  /* ---------------------------------------------------------
     FLIP CARDS (click / keyboard toggle — works on touch too)
     --------------------------------------------------------- */
  var flipCards = document.querySelectorAll('[data-flip]');
  flipCards.forEach(function (card) {
    card.addEventListener('click', function () {
      var isFlipped = card.classList.contains('is-flipped');
      // Unflip all cards first
      flipCards.forEach(function (c) {
        if (c.classList.contains('is-flipped')) {
          c.classList.remove('is-flipped');
          c.classList.add('is-unflipped');
        }
      });
      // If it wasn't flipped before, flip it now
      if (!isFlipped) {
        card.classList.remove('is-unflipped');
        card.classList.add('is-flipped');
      }
    });
  });

  /* ---------------------------------------------------------
     SCROLLSPY — highlight active TOC entry
     --------------------------------------------------------- */
  var sections = Array.prototype.slice.call(document.querySelectorAll('.sheet[id]'));
  var tocLinks = {};
  document.querySelectorAll('.toc__list a').forEach(function (a) {
    tocLinks[a.getAttribute('href').slice(1)] = a;
  });

  var spyObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var link = tocLinks[entry.target.id];
      if (!link) return;
      if (entry.isIntersecting) {
        Object.values(tocLinks).forEach(function (l) { l.classList.remove('is-active'); });
        link.classList.add('is-active');
      }
    });
  }, { rootMargin: '-15% 0px -70% 0px', threshold: 0 });

  sections.forEach(function (sec) { spyObserver.observe(sec); });

  /* ---------------------------------------------------------
     REVEAL ON SCROLL
     --------------------------------------------------------- */
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  sections.forEach(function (sec) { revealObserver.observe(sec); });


  /* ---------------------------------------------------------
     EXERCISE MODAL & QUIZ LOGIC
     --------------------------------------------------------- */
  var exercisesData = {
    "01": {
      "title": "Danh từ",
      "questions": [
        {
          "num": "1",
          "text": "The _______ of the new software will take place next Monday.",
          "options": [
            {
              "letter": "A",
              "text": "implement"
            },
            {
              "letter": "B",
              "text": "implementer"
            },
            {
              "letter": "C",
              "text": "implementation"
            },
            {
              "letter": "D",
              "text": "implementing"
            }
          ],
          "answer": "C",
          "explanation": "Cần một danh từ làm chủ ngữ sau mạo từ \"The\""
        },
        {
          "num": "2",
          "text": "We apologize for any _______ caused by the current road construction.",
          "options": [
            {
              "letter": "A",
              "text": "inconvenient"
            },
            {
              "letter": "B",
              "text": "inconvenience"
            },
            {
              "letter": "C",
              "text": "inconveniently"
            },
            {
              "letter": "D",
              "text": "inconvenienced"
            }
          ],
          "answer": "B",
          "explanation": "Cần danh từ đứng sau lượng từ \"any\" -> sự bất tiện"
        },
        {
          "num": "3",
          "text": "All _______ are required to attend the mandatory safety training session.",
          "options": [
            {
              "letter": "A",
              "text": "employ"
            },
            {
              "letter": "B",
              "text": "employee"
            },
            {
              "letter": "C",
              "text": "employees"
            },
            {
              "letter": "D",
              "text": "employing"
            }
          ],
          "answer": "C",
          "explanation": "Sau \"All\" đếm được phải là danh từ số nhiều -> nhân viên"
        },
        {
          "num": "4",
          "text": "The customer _______ department is open 24 hours a day to assist you.",
          "options": [
            {
              "letter": "A",
              "text": "service"
            },
            {
              "letter": "B",
              "text": "services"
            },
            {
              "letter": "C",
              "text": "serving"
            },
            {
              "letter": "D",
              "text": "server"
            }
          ],
          "answer": "A",
          "explanation": "Danh từ ghép \"customer service\" -> dịch vụ khách hàng"
        },
        {
          "num": "5",
          "text": "The CEO expressed her deep _______ for the team's outstanding performance.",
          "options": [
            {
              "letter": "A",
              "text": "appreciate"
            },
            {
              "letter": "B",
              "text": "appreciative"
            },
            {
              "letter": "C",
              "text": "appreciatively"
            },
            {
              "letter": "D",
              "text": "appreciation"
            }
          ],
          "answer": "D",
          "explanation": "Cần danh từ đứng sau tính từ sở hữu \"her\" và tính từ \"deep\""
        },
        {
          "num": "6",
          "text": "The laboratory needs to purchase some new _______ to conduct the experiments.",
          "options": [
            {
              "letter": "A",
              "text": "equip"
            },
            {
              "letter": "B",
              "text": "equipment"
            },
            {
              "letter": "C",
              "text": "equipments"
            },
            {
              "letter": "D",
              "text": "equipping"
            }
          ],
          "answer": "B",
          "explanation": "Từ vựng TOEIC: \"equipment\" là danh từ không đếm được, không có \"s\""
        },
        {
          "num": "7",
          "text": "Mr. Tanaka is a highly respected financial _______ with over 20 years of experience.",
          "options": [
            {
              "letter": "A",
              "text": "analyze"
            },
            {
              "letter": "B",
              "text": "analyst"
            },
            {
              "letter": "C",
              "text": "analysis"
            },
            {
              "letter": "D",
              "text": "analytical"
            }
          ],
          "answer": "B",
          "explanation": "Cần danh từ chỉ người đứng sau mạo từ \"a\" và cụm tính từ -> nhà phân tích"
        },
        {
          "num": "8",
          "text": "The company has seen a significant _______ in its quarterly revenue.",
          "options": [
            {
              "letter": "A",
              "text": "grow"
            },
            {
              "letter": "B",
              "text": "growing"
            },
            {
              "letter": "C",
              "text": "growth"
            },
            {
              "letter": "D",
              "text": "grower"
            }
          ],
          "answer": "C",
          "explanation": "Cần danh từ đứng sau tính từ \"significant\" -> sự tăng trưởng"
        },
        {
          "num": "9",
          "text": "Please remember to submit your travel _______ to the accounting office by Friday.",
          "options": [
            {
              "letter": "A",
              "text": "expense"
            },
            {
              "letter": "B",
              "text": "expenses"
            },
            {
              "letter": "C",
              "text": "expensive"
            },
            {
              "letter": "D",
              "text": "expend"
            }
          ],
          "answer": "B",
          "explanation": "Cần danh từ số nhiều ghép với \"travel\" -> chi phí đi lại"
        },
        {
          "num": "10",
          "text": "Those _______ who wish to attend the workshop should register online.",
          "options": [
            {
              "letter": "A",
              "text": "participate"
            },
            {
              "letter": "B",
              "text": "participants"
            },
            {
              "letter": "C",
              "text": "participation"
            },
            {
              "letter": "D",
              "text": "participatory"
            }
          ],
          "answer": "B",
          "explanation": "Cần danh từ số nhiều chỉ người làm chủ ngữ cho đại từ quan hệ \"who\""
        },
        {
          "num": "11",
          "text": "_______ at the annual conference is strictly mandatory for all managers.",
          "options": [
            {
              "letter": "A",
              "text": "Attend"
            },
            {
              "letter": "B",
              "text": "Attendant"
            },
            {
              "letter": "C",
              "text": "Attendance"
            },
            {
              "letter": "D",
              "text": "Attended"
            }
          ],
          "answer": "C",
          "explanation": "Cần danh từ làm chủ ngữ -> sự tham dự"
        },
        {
          "num": "12",
          "text": "The job requires a high level of _______ and dedication to meet strict deadlines.",
          "options": [
            {
              "letter": "A",
              "text": "commit"
            },
            {
              "letter": "B",
              "text": "commitment"
            },
            {
              "letter": "C",
              "text": "committed"
            },
            {
              "letter": "D",
              "text": "committing"
            }
          ],
          "answer": "B",
          "explanation": "Cần danh từ đứng sau giới từ \"of\" và song song với \"dedication\""
        },
        {
          "num": "13",
          "text": "The _______ of the new commercial complex is expected to be completed in May.",
          "options": [
            {
              "letter": "A",
              "text": "construct"
            },
            {
              "letter": "B",
              "text": "construction"
            },
            {
              "letter": "C",
              "text": "constructed"
            },
            {
              "letter": "D",
              "text": "constructor"
            }
          ],
          "answer": "B",
          "explanation": "Cần danh từ sau mạo từ \"The\" -> sự xây dựng/công trình"
        },
        {
          "num": "14",
          "text": "An external _______ was hired to evaluate the company's marketing strategies.",
          "options": [
            {
              "letter": "A",
              "text": "consult"
            },
            {
              "letter": "B",
              "text": "consultation"
            },
            {
              "letter": "C",
              "text": "consultant"
            },
            {
              "letter": "D",
              "text": "consultative"
            }
          ],
          "answer": "C",
          "explanation": "Cần danh từ chỉ người sau \"An external\" -> người cố vấn"
        },
        {
          "num": "15",
          "text": "A wide variety of local _______ will be served at the welcome banquet.",
          "options": [
            {
              "letter": "A",
              "text": "dish"
            },
            {
              "letter": "B",
              "text": "dishes"
            },
            {
              "letter": "C",
              "text": "dishing"
            },
            {
              "letter": "D",
              "text": "dished"
            }
          ],
          "answer": "B",
          "explanation": "Cần danh từ đếm được số nhiều sau \"A wide variety of\" -> các món ăn"
        }
      ]
    },
    "02": {
      "title": "Động từ",
      "questions": [
        {
          "num": "1",
          "text": "Over the past few years, our company _______ significantly in overseas markets.",
          "options": [
            {
              "letter": "A",
              "text": "expand"
            },
            {
              "letter": "B",
              "text": "expands"
            },
            {
              "letter": "C",
              "text": "has expanded"
            },
            {
              "letter": "D",
              "text": "expanding"
            }
          ],
          "answer": "C",
          "explanation": "Dấu hiệu \"Over the past few years\" dùng thì Hiện tại hoàn thành"
        },
        {
          "num": "2",
          "text": "The final project report must be _______ to the supervisor by 5:00 PM tomorrow.",
          "options": [
            {
              "letter": "A",
              "text": "submit"
            },
            {
              "letter": "B",
              "text": "submits"
            },
            {
              "letter": "C",
              "text": "submitting"
            },
            {
              "letter": "D",
              "text": "submitted"
            }
          ],
          "answer": "D",
          "explanation": "Thể bị động sau động từ khuyết thiếu: must + be + V-ed/P2 -> bản báo cáo phải được nộp"
        },
        {
          "num": "3",
          "text": "The shipment of fragile glassware _______ careful handling during transit.",
          "options": [
            {
              "letter": "A",
              "text": "require"
            },
            {
              "letter": "B",
              "text": "requires"
            },
            {
              "letter": "C",
              "text": "are requiring"
            },
            {
              "letter": "D",
              "text": "have required"
            }
          ],
          "answer": "B",
          "explanation": "Sự hòa hợp chủ vị: Chủ ngữ chính là \"The shipment\" (số ít), nên động từ thêm \"s\""
        },
        {
          "num": "4",
          "text": "We look forward to _______ your innovative proposal at the upcoming board meeting.",
          "options": [
            {
              "letter": "A",
              "text": "review"
            },
            {
              "letter": "B",
              "text": "reviewed"
            },
            {
              "letter": "C",
              "text": "reviewing"
            },
            {
              "letter": "D",
              "text": "reviews"
            }
          ],
          "answer": "C",
          "explanation": "Cấu trúc \"look forward to + V-ing\" -> mong đợi làm gì đó"
        },
        {
          "num": "5",
          "text": "To _______ production costs, the factory has recently upgraded all its machinery.",
          "options": [
            {
              "letter": "A",
              "text": "reduce"
            },
            {
              "letter": "B",
              "text": "reducing"
            },
            {
              "letter": "C",
              "text": "reduced"
            },
            {
              "letter": "D",
              "text": "reduces"
            }
          ],
          "answer": "A",
          "explanation": "Cấu trúc \"To + V nguyên thể\" chỉ mục đích -> Để cắt giảm"
        },
        {
          "num": "6",
          "text": "All visitors must _______ their identification badges at the front desk upon arrival.",
          "options": [
            {
              "letter": "A",
              "text": "presents"
            },
            {
              "letter": "B",
              "text": "present"
            },
            {
              "letter": "C",
              "text": "presented"
            },
            {
              "letter": "D",
              "text": "presenting"
            }
          ],
          "answer": "B",
          "explanation": "Sau động từ khuyết thiếu \"must\" là động từ nguyên thể không \"to\""
        },
        {
          "num": "7",
          "text": "Next month, the board of directors _______ the new budget for the upcoming fiscal year.",
          "options": [
            {
              "letter": "A",
              "text": "approved"
            },
            {
              "letter": "B",
              "text": "will approve"
            },
            {
              "letter": "C",
              "text": "has approved"
            },
            {
              "letter": "D",
              "text": "was approving"
            }
          ],
          "answer": "B",
          "explanation": "Dấu hiệu \"Next month\" dùng thì Tương lai đơn"
        },
        {
          "num": "8",
          "text": "The manager had the marketing team _______ the advertising campaign entirely.",
          "options": [
            {
              "letter": "A",
              "text": "redesign"
            },
            {
              "letter": "B",
              "text": "redesigned"
            },
            {
              "letter": "C",
              "text": "redesigns"
            },
            {
              "letter": "D",
              "text": "redesigning"
            }
          ],
          "answer": "A",
          "explanation": "Cấu trúc nhờ vả chủ động: have + somebody + V nguyên thể -> bảo ai đó làm gì"
        },
        {
          "num": "9",
          "text": "Mr. Miller _______ the keynote speech at the annual technology conference last year.",
          "options": [
            {
              "letter": "A",
              "text": "delivers"
            },
            {
              "letter": "B",
              "text": "will deliver"
            },
            {
              "letter": "C",
              "text": "delivered"
            },
            {
              "letter": "D",
              "text": "has delivered"
            }
          ],
          "answer": "C",
          "explanation": "Dấu hiệu \"last year\" dùng thì Quá khứ đơn"
        },
        {
          "num": "10",
          "text": "The updated policies _______ to employee benefits can be found in the staff handbook.",
          "options": [
            {
              "letter": "A",
              "text": "pertain"
            },
            {
              "letter": "B",
              "text": "pertains"
            },
            {
              "letter": "C",
              "text": "pertained"
            },
            {
              "letter": "D",
              "text": "pertaining"
            }
          ],
          "answer": "D",
          "explanation": "Rút gọn mệnh đề quan hệ chủ động: \"policies which pertain to...\" rút gọn thành V-ing"
        },
        {
          "num": "11",
          "text": "The safety inspector highly recommended _______ the fire alarms on all floors this week.",
          "options": [
            {
              "letter": "A",
              "text": "test"
            },
            {
              "letter": "B",
              "text": "tests"
            },
            {
              "letter": "C",
              "text": "tested"
            },
            {
              "letter": "D",
              "text": "testing"
            }
          ],
          "answer": "D",
          "explanation": "Sau động từ \"recommend\" nếu không có mệnh đề \"that\" thì dùng V-ing -> khuyên/đề xuất làm gì"
        },
        {
          "num": "12",
          "text": "The main office building _______ right now, so we have relocated temporarily.",
          "options": [
            {
              "letter": "A",
              "text": "is renovating"
            },
            {
              "letter": "B",
              "text": "is being renovated"
            },
            {
              "letter": "C",
              "text": "renovated"
            },
            {
              "letter": "D",
              "text": "has renovated"
            }
          ],
          "answer": "B",
          "explanation": "Dấu hiệu \"right now\" dùng Hiện tại tiếp diễn, kết hợp với thể bị động vì tòa nhà \"đang được cải tạo\""
        },
        {
          "num": "13",
          "text": "If online sales _______ at this rate, we will exceed our annual target by October.",
          "options": [
            {
              "letter": "A",
              "text": "continues"
            },
            {
              "letter": "B",
              "text": "continuing"
            },
            {
              "letter": "C",
              "text": "continued"
            },
            {
              "letter": "D",
              "text": "continue"
            }
          ],
          "answer": "D",
          "explanation": "Câu điều kiện loại 1: Mệnh đề \"If\" dùng thì Hiện tại đơn. Chủ ngữ \"sales\" số nhiều nên động từ nguyên thể"
        },
        {
          "num": "14",
          "text": "The central air conditioning system needs to be _______ before the summer heat starts.",
          "options": [
            {
              "letter": "A",
              "text": "repair"
            },
            {
              "letter": "B",
              "text": "repaired"
            },
            {
              "letter": "C",
              "text": "repairing"
            },
            {
              "letter": "D",
              "text": "repairs"
            }
          ],
          "answer": "B",
          "explanation": "Cấu trúc bị động của \"need\": need to be + V-ed/P2 -> cần được sửa chữa"
        },
        {
          "num": "15",
          "text": "By the time the CEO arrives, we _______ all the preparations for the seminar.",
          "options": [
            {
              "letter": "A",
              "text": "finished"
            },
            {
              "letter": "B",
              "text": "will finish"
            },
            {
              "letter": "C",
              "text": "will have finished"
            },
            {
              "letter": "D",
              "text": "are finishing"
            }
          ],
          "answer": "C",
          "explanation": "Dấu hiệu \"By the time + [Thì hiện tại đơn]\" dùng thì Tương lai hoàn thành ở mệnh đề chính"
        }
      ]
    },
    "03": {
      "title": "Tính từ",
      "questions": [
        {
          "num": "1",
          "text": "All employees must _______ themselves with the new safety guidelines by Friday.",
          "options": [
            {
              "letter": "A",
              "text": "familiar"
            },
            {
              "letter": "B",
              "text": "familiarize"
            },
            {
              "letter": "C",
              "text": "familiarity"
            },
            {
              "letter": "D",
              "text": "familiarly"
            }
          ],
          "answer": "B",
          "explanation": "Sau \"must\" cần động từ. Hậu tố **-ize** thường là động từ"
        },
        {
          "num": "2",
          "text": "The manager wants to _______ the marketing strategy to attract more young customers.",
          "options": [
            {
              "letter": "A",
              "text": "modern"
            },
            {
              "letter": "B",
              "text": "modernity"
            },
            {
              "letter": "C",
              "text": "modernize"
            },
            {
              "letter": "D",
              "text": "modernization"
            }
          ],
          "answer": "C",
          "explanation": "Sau \"to\" cần động từ. Hậu tố **-ize** -> hiện đại hóa"
        },
        {
          "num": "3",
          "text": "Please _______ the original receipt to your monthly expense report.",
          "options": [
            {
              "letter": "A",
              "text": "attachment"
            },
            {
              "letter": "B",
              "text": "attach"
            },
            {
              "letter": "C",
              "text": "attached"
            },
            {
              "letter": "D",
              "text": "attachable"
            }
          ],
          "answer": "B",
          "explanation": "Câu mệnh lệnh bắt đầu bằng \"Please\" + động từ nguyên thể"
        },
        {
          "num": "4",
          "text": "We would like to _______ all participants that the meeting location has changed.",
          "options": [
            {
              "letter": "A",
              "text": "notification"
            },
            {
              "letter": "B",
              "text": "notify"
            },
            {
              "letter": "C",
              "text": "noticeable"
            },
            {
              "letter": "D",
              "text": "noticeably"
            }
          ],
          "answer": "B",
          "explanation": "Sau \"to\" cần động từ. Hậu tố **-ify** thường là động từ"
        },
        {
          "num": "5",
          "text": "The new software will significantly _______ the accounting process.",
          "options": [
            {
              "letter": "A",
              "text": "simple"
            },
            {
              "letter": "B",
              "text": "simply"
            },
            {
              "letter": "C",
              "text": "simplify"
            },
            {
              "letter": "D",
              "text": "simplicity"
            }
          ],
          "answer": "C",
          "explanation": "Sau \"will\" cần động từ. Hậu tố **-ify** -> đơn giản hóa"
        },
        {
          "num": "6",
          "text": "For security reasons, you should _______ your password every three months.",
          "options": [
            {
              "letter": "A",
              "text": "modification"
            },
            {
              "letter": "B",
              "text": "modify"
            },
            {
              "letter": "C",
              "text": "modifiable"
            },
            {
              "letter": "D",
              "text": "modifier"
            }
          ],
          "answer": "B",
          "explanation": "Sau \"should\" cần động từ. Hậu tố **-ify** -> chỉnh sửa"
        },
        {
          "num": "7",
          "text": "This data processing tool will help you _______ the market trends more accurately.",
          "options": [
            {
              "letter": "A",
              "text": "analysis"
            },
            {
              "letter": "B",
              "text": "analytical"
            },
            {
              "letter": "C",
              "text": "analytically"
            },
            {
              "letter": "D",
              "text": "analyze"
            }
          ],
          "answer": "D",
          "explanation": "Cấu trúc \"help sb + (to) V\". Hậu tố **-yze / -ize** là động từ"
        },
        {
          "num": "8",
          "text": "Our team members regularly _______ with clients to understand their specific needs.",
          "options": [
            {
              "letter": "A",
              "text": "communication"
            },
            {
              "letter": "B",
              "text": "communicative"
            },
            {
              "letter": "C",
              "text": "communicate"
            },
            {
              "letter": "D",
              "text": "communicator"
            }
          ],
          "answer": "C",
          "explanation": "Sau chủ ngữ \"team members\" cần động từ chính. Hậu tố **-ate** thường là động từ"
        },
        {
          "num": "9",
          "text": "Let's _______ the main issues before we make a final decision.",
          "options": [
            {
              "letter": "A",
              "text": "summarize"
            },
            {
              "letter": "B",
              "text": "summary"
            },
            {
              "letter": "C",
              "text": "summative"
            },
            {
              "letter": "D",
              "text": "summarization"
            }
          ],
          "answer": "A",
          "explanation": "Sau \"Let's\" cần động từ nguyên thể -> tóm tắt"
        },
        {
          "num": "10",
          "text": "In order to _______ for the discount, you must show your valid student ID.",
          "options": [
            {
              "letter": "A",
              "text": "qualification"
            },
            {
              "letter": "B",
              "text": "qualify"
            },
            {
              "letter": "C",
              "text": "qualitative"
            },
            {
              "letter": "D",
              "text": "qualitatively"
            }
          ],
          "answer": "B",
          "explanation": "Cấu trúc \"In order to + V\" -> đủ điều kiện"
        },
        {
          "num": "11",
          "text": "The newly installed security system can _______ unauthorized access immediately.",
          "options": [
            {
              "letter": "A",
              "text": "detector"
            },
            {
              "letter": "B",
              "text": "detection"
            },
            {
              "letter": "C",
              "text": "detect"
            },
            {
              "letter": "D",
              "text": "detectable"
            }
          ],
          "answer": "C",
          "explanation": "Sau \"can\" cần động từ. Các đáp án khác là danh từ đuôi -or/-ion và tính từ đuôi -able"
        },
        {
          "num": "12",
          "text": "The legal team has to _______ the contract before the director signs it.",
          "options": [
            {
              "letter": "A",
              "text": "final"
            },
            {
              "letter": "B",
              "text": "finally"
            },
            {
              "letter": "C",
              "text": "finalize"
            },
            {
              "letter": "D",
              "text": "finality"
            }
          ],
          "answer": "C",
          "explanation": "Sau \"has to\" cần động từ. Hậu tố **-ize** -> hoàn tất"
        },
        {
          "num": "13",
          "text": "Please make sure to _______ the delivery address before clicking the confirm button.",
          "options": [
            {
              "letter": "A",
              "text": "verification"
            },
            {
              "letter": "B",
              "text": "verify"
            },
            {
              "letter": "C",
              "text": "verifiable"
            },
            {
              "letter": "D",
              "text": "verifier"
            }
          ],
          "answer": "B",
          "explanation": "Sau \"to\" cần động từ. Hậu tố **-ify** -> xác minh"
        },
        {
          "num": "14",
          "text": "The company needs to _______ its product line to stay competitive in the market.",
          "options": [
            {
              "letter": "A",
              "text": "diverse"
            },
            {
              "letter": "B",
              "text": "diversify"
            },
            {
              "letter": "C",
              "text": "diversity"
            },
            {
              "letter": "D",
              "text": "diversely"
            }
          ],
          "answer": "B",
          "explanation": "Sau \"needs to\" cần động từ. Hậu tố **-ify** -> đa dạng hóa"
        },
        {
          "num": "15",
          "text": "The CEO will _______ the annual awards at the banquet tomorrow evening.",
          "options": [
            {
              "letter": "A",
              "text": "presentable"
            },
            {
              "letter": "B",
              "text": "presentation"
            },
            {
              "letter": "C",
              "text": "present"
            },
            {
              "letter": "D",
              "text": "presently"
            }
          ],
          "answer": "C",
          "explanation": "Sau \"will\" cần động từ. \"Presentation\" là danh từ, \"presentable\" là tính từ"
        }
      ]
    },
    "04": {
      "title": "Trạng từ",
      "questions": [
        {
          "num": "1",
          "text": "The project team managed to complete the difficult task _______ ahead of schedule.",
          "options": [
            {
              "letter": "A",
              "text": "success"
            },
            {
              "letter": "B",
              "text": "successful"
            },
            {
              "letter": "C",
              "text": "successfully"
            },
            {
              "letter": "D",
              "text": "succeed"
            }
          ],
          "answer": "C",
          "explanation": "Bổ nghĩa cho động từ \"complete\", đứng sau tân ngữ"
        },
        {
          "num": "2",
          "text": "The company's online sales have _______ grown since the launch of the new website.",
          "options": [
            {
              "letter": "A",
              "text": "rapid"
            },
            {
              "letter": "B",
              "text": "rapidly"
            },
            {
              "letter": "C",
              "text": "rapidity"
            },
            {
              "letter": "D",
              "text": "rapids"
            }
          ],
          "answer": "B",
          "explanation": "Đứng giữa trợ động từ \"have\" và động từ phân từ hai \"grown\""
        },
        {
          "num": "3",
          "text": "The new software interface is _______ easy for beginners to navigate.",
          "options": [
            {
              "letter": "A",
              "text": "surprise"
            },
            {
              "letter": "B",
              "text": "surprising"
            },
            {
              "letter": "C",
              "text": "surprisingly"
            },
            {
              "letter": "D",
              "text": "surprised"
            }
          ],
          "answer": "C",
          "explanation": "Đứng trước bổ nghĩa cho tính từ \"easy\""
        },
        {
          "num": "4",
          "text": "_______, the outdoor networking event was canceled due to severe weather conditions.",
          "options": [
            {
              "letter": "A",
              "text": "Unfortunate"
            },
            {
              "letter": "B",
              "text": "Unfortunately"
            },
            {
              "letter": "C",
              "text": "Fortune"
            },
            {
              "letter": "D",
              "text": "Fortunate"
            }
          ],
          "answer": "B",
          "explanation": "Đứng đầu câu, trước dấu phẩy để bổ nghĩa cho toàn bộ mệnh đề phía sau"
        },
        {
          "num": "5",
          "text": "Mr. Harris _______ visits the regional branches to check on their progress.",
          "options": [
            {
              "letter": "A",
              "text": "frequent"
            },
            {
              "letter": "B",
              "text": "frequency"
            },
            {
              "letter": "C",
              "text": "frequently"
            },
            {
              "letter": "D",
              "text": "frequented"
            }
          ],
          "answer": "C",
          "explanation": "Đứng giữa chủ ngữ \"Mr. Harris\" và động từ chính \"visits\""
        },
        {
          "num": "6",
          "text": "The department store offers an _______ wide selection of home appliances.",
          "options": [
            {
              "letter": "A",
              "text": "exception"
            },
            {
              "letter": "B",
              "text": "exceptional"
            },
            {
              "letter": "C",
              "text": "exceptionally"
            },
            {
              "letter": "D",
              "text": "except"
            }
          ],
          "answer": "C",
          "explanation": "Đứng trước bổ nghĩa cho cụm tính từ + danh từ \"wide selection\""
        },
        {
          "num": "7",
          "text": "All quarterly financial reports must be _______ reviewed by the head accountant.",
          "options": [
            {
              "letter": "A",
              "text": "careful"
            },
            {
              "letter": "B",
              "text": "care"
            },
            {
              "letter": "C",
              "text": "carefully"
            },
            {
              "letter": "D",
              "text": "carefulness"
            }
          ],
          "answer": "C",
          "explanation": "Đứng giữa \"be\" và động từ phân từ hai \"reviewed\" trong cấu trúc bị động"
        },
        {
          "num": "8",
          "text": "Please read the installation manual _______ before setting up the equipment.",
          "options": [
            {
              "letter": "A",
              "text": "thorough"
            },
            {
              "letter": "B",
              "text": "thoroughly"
            },
            {
              "letter": "C",
              "text": "thoroughness"
            },
            {
              "letter": "D",
              "text": "thoroughgoing"
            }
          ],
          "answer": "B",
          "explanation": "Bổ nghĩa cho động từ \"read\", đứng ở cuối mệnh đề sau tân ngữ"
        },
        {
          "num": "9",
          "text": "For your safety, passengers must _______ fasten their seatbelts during takeoff.",
          "options": [
            {
              "letter": "A",
              "text": "secure"
            },
            {
              "letter": "B",
              "text": "security"
            },
            {
              "letter": "C",
              "text": "securely"
            },
            {
              "letter": "D",
              "text": "securing"
            }
          ],
          "answer": "C",
          "explanation": "Đứng giữa động từ khuyết thiếu \"must\" và động từ chính \"fasten\""
        },
        {
          "num": "10",
          "text": "The courier service delivered the packages _______ faster than we had anticipated.",
          "options": [
            {
              "letter": "A",
              "text": "significant"
            },
            {
              "letter": "B",
              "text": "significance"
            },
            {
              "letter": "C",
              "text": "significantly"
            },
            {
              "letter": "D",
              "text": "signify"
            }
          ],
          "answer": "C",
          "explanation": "Đứng trước bổ nghĩa cho một trạng từ/tính từ so sánh hơn \"faster\""
        },
        {
          "num": "11",
          "text": "It is _______ important to submit your registration form before the deadline.",
          "options": [
            {
              "letter": "A",
              "text": "absolute"
            },
            {
              "letter": "B",
              "text": "absolutely"
            },
            {
              "letter": "C",
              "text": "absolve"
            },
            {
              "letter": "D",
              "text": "absoluteness"
            }
          ],
          "answer": "B",
          "explanation": "Đứng trước bổ nghĩa cho tính từ \"important\""
        },
        {
          "num": "12",
          "text": "_______, the newly launched smartphone became our best-selling product in just one week.",
          "options": [
            {
              "letter": "A",
              "text": "Remarkable"
            },
            {
              "letter": "B",
              "text": "Remarkably"
            },
            {
              "letter": "C",
              "text": "Remark"
            },
            {
              "letter": "D",
              "text": "Remarked"
            }
          ],
          "answer": "B",
          "explanation": "Đứng đầu câu, trước dấu phẩy bổ nghĩa cho cả câu"
        },
        {
          "num": "13",
          "text": "The marketing division is _______ working on a campaign to boost holiday sales.",
          "options": [
            {
              "letter": "A",
              "text": "current"
            },
            {
              "letter": "B",
              "text": "currently"
            },
            {
              "letter": "C",
              "text": "currency"
            },
            {
              "letter": "D",
              "text": "currents"
            }
          ],
          "answer": "B",
          "explanation": "Đứng giữa to be \"is\" và động từ V-ing \"working\" trong thì tiếp diễn"
        },
        {
          "num": "14",
          "text": "Thanks to the recent maintenance, the engine of the delivery truck runs very _______.",
          "options": [
            {
              "letter": "A",
              "text": "smooth"
            },
            {
              "letter": "B",
              "text": "smoothly"
            },
            {
              "letter": "C",
              "text": "smoothness"
            },
            {
              "letter": "D",
              "text": "smoothen"
            }
          ],
          "answer": "B",
          "explanation": "Đứng sau bổ nghĩa cho động từ thường \"runs\" / sau trạng từ chỉ mức độ \"very\""
        },
        {
          "num": "15",
          "text": "Profits for the third quarter were _______ lower than the board of directors expected.",
          "options": [
            {
              "letter": "A",
              "text": "slight"
            },
            {
              "letter": "B",
              "text": "slightly"
            },
            {
              "letter": "C",
              "text": "slightness"
            },
            {
              "letter": "D",
              "text": "slightest"
            }
          ],
          "answer": "B",
          "explanation": "Đứng trước bổ nghĩa cho tính từ \"lower\""
        }
      ]
    },
    "05": {
      "title": "Đại từ",
      "questions": [
        {
          "num": "1",
          "text": "The marketing director asked all staff members to submit _______ weekly reports by Friday afternoon.",
          "options": [
            {
              "letter": "A",
              "text": "they"
            },
            {
              "letter": "B",
              "text": "their"
            },
            {
              "letter": "C",
              "text": "them"
            },
            {
              "letter": "D",
              "text": "theirs"
            }
          ],
          "answer": "B",
          "explanation": "Cần tính từ sở hữu đứng trước danh từ \"weekly reports\" -> báo cáo của họ"
        },
        {
          "num": "2",
          "text": "The CEO _______ will announce the details of the upcoming corporate merger at tomorrow's meeting.",
          "options": [
            {
              "letter": "A",
              "text": "herself"
            },
            {
              "letter": "B",
              "text": "she"
            },
            {
              "letter": "C",
              "text": "hers"
            },
            {
              "letter": "D",
              "text": "her"
            }
          ],
          "answer": "A",
          "explanation": "Đại từ phản thân đứng ngay sau danh từ chỉ người \"The CEO\" để nhấn mạnh -> đích thân cô ấy"
        },
        {
          "num": "3",
          "text": "_______ interested in attending the leadership workshop should sign up at the HR department.",
          "options": [
            {
              "letter": "A",
              "text": "That"
            },
            {
              "letter": "B",
              "text": "This"
            },
            {
              "letter": "C",
              "text": "Those"
            },
            {
              "letter": "D",
              "text": "These"
            }
          ],
          "answer": "C",
          "explanation": "Cấu trúc rất phổ biến trong TOEIC: \"Those (who are) interested in...\" -> Những ai quan tâm đến..."
        },
        {
          "num": "4",
          "text": "We are looking for experienced software engineers _______ backgrounds are in artificial intelligence.",
          "options": [
            {
              "letter": "A",
              "text": "who"
            },
            {
              "letter": "B",
              "text": "whom"
            },
            {
              "letter": "C",
              "text": "whose"
            },
            {
              "letter": "D",
              "text": "which"
            }
          ],
          "answer": "C",
          "explanation": "Đại từ quan hệ chỉ sự sở hữu, đứng giữa 2 danh từ \"engineers\" và \"backgrounds\" -> người mà có nền tảng..."
        },
        {
          "num": "5",
          "text": "If you do not have your own copy of the training manual, you may borrow _______.",
          "options": [
            {
              "letter": "A",
              "text": "my"
            },
            {
              "letter": "B",
              "text": "me"
            },
            {
              "letter": "C",
              "text": "I"
            },
            {
              "letter": "D",
              "text": "mine"
            }
          ],
          "answer": "D",
          "explanation": "Đại từ sở hữu thay thế cho \"my copy\" để tránh lặp từ -> bản của tôi"
        },
        {
          "num": "6",
          "text": "Mr. Henderson completed the complicated financial audit entirely by _______.",
          "options": [
            {
              "letter": "A",
              "text": "himself"
            },
            {
              "letter": "B",
              "text": "him"
            },
            {
              "letter": "C",
              "text": "his"
            },
            {
              "letter": "D",
              "text": "he"
            }
          ],
          "answer": "A",
          "explanation": "Cấu trúc \"by oneself\" = tự mình làm việc gì đó. Chủ ngữ là Mr. Henderson nên dùng himself"
        },
        {
          "num": "7",
          "text": "Please forward the updated meeting schedule to Ms. Jenkins and _______ as soon as possible.",
          "options": [
            {
              "letter": "A",
              "text": "she"
            },
            {
              "letter": "B",
              "text": "her"
            },
            {
              "letter": "C",
              "text": "hers"
            },
            {
              "letter": "D",
              "text": "herself"
            }
          ],
          "answer": "B",
          "explanation": "Cần đại từ làm tân ngữ đứng sau giới từ \"to\""
        },
        {
          "num": "8",
          "text": "The tech company is proud to announce the grand opening of _______ new branch in Tokyo.",
          "options": [
            {
              "letter": "A",
              "text": "it"
            },
            {
              "letter": "B",
              "text": "its"
            },
            {
              "letter": "C",
              "text": "itself"
            },
            {
              "letter": "D",
              "text": "they"
            }
          ],
          "answer": "B",
          "explanation": "Cần tính từ sở hữu đứng trước cụm danh từ \"new branch\", thay thế cho danh từ số ít \"The tech company\" -> chi nhánh của nó"
        },
        {
          "num": "9",
          "text": "The clients with _______ we had a conference call yesterday have agreed to sign the contract.",
          "options": [
            {
              "letter": "A",
              "text": "who"
            },
            {
              "letter": "B",
              "text": "which"
            },
            {
              "letter": "C",
              "text": "whom"
            },
            {
              "letter": "D",
              "text": "whose"
            }
          ],
          "answer": "C",
          "explanation": "Đại từ quan hệ đóng vai trò tân ngữ chỉ người, đứng sau giới từ \"with\" -> with whom"
        },
        {
          "num": "10",
          "text": "Some employees prefer to work remotely, while _______ find the office environment more productive.",
          "options": [
            {
              "letter": "A",
              "text": "other"
            },
            {
              "letter": "B",
              "text": "another"
            },
            {
              "letter": "C",
              "text": "each other"
            },
            {
              "letter": "D",
              "text": "others"
            }
          ],
          "answer": "D",
          "explanation": "Đại từ bất định số nhiều, mang nghĩa là \"những người khác\", đóng vai trò làm chủ ngữ cho động từ \"find\""
        },
        {
          "num": "11",
          "text": "The design of the new smartphone is quite similar to _______ of the previous generation.",
          "options": [
            {
              "letter": "A",
              "text": "that"
            },
            {
              "letter": "B",
              "text": "those"
            },
            {
              "letter": "C",
              "text": "this"
            },
            {
              "letter": "D",
              "text": "these"
            }
          ],
          "answer": "A",
          "explanation": "Đại từ chỉ định thay thế cho danh từ số ít \"The design\" ở phía trước -> \"that of\" = the design of"
        },
        {
          "num": "12",
          "text": "The committee members organized the annual charity fundraising event all by _______.",
          "options": [
            {
              "letter": "A",
              "text": "they"
            },
            {
              "letter": "B",
              "text": "their"
            },
            {
              "letter": "C",
              "text": "them"
            },
            {
              "letter": "D",
              "text": "themselves"
            }
          ],
          "answer": "D",
          "explanation": "Cấu trúc \"by oneself\". Chủ ngữ \"The committee members\" số nhiều nên dùng themselves"
        },
        {
          "num": "13",
          "text": "The architectural proposal submitted by our team was much more detailed than _______.",
          "options": [
            {
              "letter": "A",
              "text": "their"
            },
            {
              "letter": "B",
              "text": "they"
            },
            {
              "letter": "C",
              "text": "theirs"
            },
            {
              "letter": "D",
              "text": "them"
            }
          ],
          "answer": "C",
          "explanation": "Đại từ sở hữu đóng vai trò đứng cuối câu so sánh, thay thế cho \"their proposal\" -> bản đề xuất của họ"
        },
        {
          "num": "14",
          "text": "A special bonus will be awarded to _______ achieves the highest sales volume this quarter.",
          "options": [
            {
              "letter": "A",
              "text": "anyone"
            },
            {
              "letter": "B",
              "text": "whatever"
            },
            {
              "letter": "C",
              "text": "whoever"
            },
            {
              "letter": "D",
              "text": "everything"
            }
          ],
          "answer": "C",
          "explanation": "Đại từ quan hệ mang nghĩa \"bất cứ ai\", đóng vai trò làm chủ ngữ cho động từ \"achieves\" phía sau"
        },
        {
          "num": "15",
          "text": "Please make sure that _______ is ready before the health inspectors arrive at the restaurant.",
          "options": [
            {
              "letter": "A",
              "text": "anyone"
            },
            {
              "letter": "B",
              "text": "everything"
            },
            {
              "letter": "C",
              "text": "anything"
            },
            {
              "letter": "D",
              "text": "somewhere"
            }
          ],
          "answer": "B",
          "explanation": "Đại từ bất định chỉ vật, mang nghĩa \"mọi thứ\". Hợp nghĩa: đảm bảo mọi thứ đã sẵn sàng"
        }
      ]
    },
    "06": {
      "title": "Giới từ",
      "questions": [
        {
          "num": "1",
          "text": "The manager scheduled the weekly staff meeting _______ Monday morning.",
          "options": [
            {
              "letter": "A",
              "text": "in"
            },
            {
              "letter": "B",
              "text": "on"
            },
            {
              "letter": "C",
              "text": "at"
            },
            {
              "letter": "D",
              "text": "to"
            }
          ],
          "answer": "B",
          "explanation": "Đi với các thứ trong tuần hoặc buổi của một ngày cụ thể: *on Monday morning*"
        },
        {
          "num": "2",
          "text": "The newly renovated headquarters is located _______ 450 Madison Avenue.",
          "options": [
            {
              "letter": "A",
              "text": "in"
            },
            {
              "letter": "B",
              "text": "on"
            },
            {
              "letter": "C",
              "text": "at"
            },
            {
              "letter": "D",
              "text": "to"
            }
          ],
          "answer": "C",
          "explanation": "Đi với một địa chỉ nhà cụ thể có số nhà: *at 450 Madison Avenue*"
        },
        {
          "num": "3",
          "text": "Please ensure that the final draft of the contract is submitted _______ 5:00 PM today.",
          "options": [
            {
              "letter": "A",
              "text": "until"
            },
            {
              "letter": "B",
              "text": "by"
            },
            {
              "letter": "C",
              "text": "on"
            },
            {
              "letter": "D",
              "text": "in"
            }
          ],
          "answer": "B",
          "explanation": "Đi với thời hạn/deadline: *by 5:00 PM* = trước/chậm nhất là 5h chiều"
        },
        {
          "num": "4",
          "text": "The extra office supplies are stored _______ the top shelf in the break room.",
          "options": [
            {
              "letter": "A",
              "text": "under"
            },
            {
              "letter": "B",
              "text": "in"
            },
            {
              "letter": "C",
              "text": "at"
            },
            {
              "letter": "D",
              "text": "on"
            }
          ],
          "answer": "D",
          "explanation": "Chỉ vị trí trên bề mặt: *on the top shelf* = trên kệ trên cùng"
        },
        {
          "num": "5",
          "text": "The staff cafeteria will be closed for maintenance _______ the winter holidays.",
          "options": [
            {
              "letter": "A",
              "text": "while"
            },
            {
              "letter": "B",
              "text": "during"
            },
            {
              "letter": "C",
              "text": "for"
            },
            {
              "letter": "D",
              "text": "within"
            }
          ],
          "answer": "B",
          "explanation": "Đi với một danh từ chỉ thời kỳ/sự kiện: *during the winter holidays* = trong suốt kỳ nghỉ đông"
        },
        {
          "num": "6",
          "text": "The new branch office will be built just _______ the street from the subway station.",
          "options": [
            {
              "letter": "A",
              "text": "across"
            },
            {
              "letter": "B",
              "text": "through"
            },
            {
              "letter": "C",
              "text": "over"
            },
            {
              "letter": "D",
              "text": "along"
            }
          ],
          "answer": "A",
          "explanation": "Chỉ vị trí đối diện: *across the street from* = ở phía bên kia đường"
        },
        {
          "num": "7",
          "text": "The software company was originally founded _______ 1998 by a group of engineers.",
          "options": [
            {
              "letter": "A",
              "text": "in"
            },
            {
              "letter": "B",
              "text": "on"
            },
            {
              "letter": "C",
              "text": "at"
            },
            {
              "letter": "D",
              "text": "from"
            }
          ],
          "answer": "A",
          "explanation": "Đi với năm, tháng, mùa: *in 1998*"
        },
        {
          "num": "8",
          "text": "The confidentiality agreement must be signed _______ the two collaborating companies.",
          "options": [
            {
              "letter": "A",
              "text": "among"
            },
            {
              "letter": "B",
              "text": "between"
            },
            {
              "letter": "C",
              "text": "beside"
            },
            {
              "letter": "D",
              "text": "against"
            }
          ],
          "answer": "B",
          "explanation": "Dùng cho vị trí hoặc mối quan hệ giữa 2 người/vật/nhóm: *between the two companies*"
        },
        {
          "num": "9",
          "text": "Ms. Anderson has been the director of human resources _______ more than five years.",
          "options": [
            {
              "letter": "A",
              "text": "since"
            },
            {
              "letter": "B",
              "text": "during"
            },
            {
              "letter": "C",
              "text": "for"
            },
            {
              "letter": "D",
              "text": "in"
            }
          ],
          "answer": "C",
          "explanation": "Đi với khoảng thời gian: *for more than five years*. Khác với \"since\" đi với mốc thời gian"
        },
        {
          "num": "10",
          "text": "You can find the detailed financial charts _______ the back page of the annual report.",
          "options": [
            {
              "letter": "A",
              "text": "at"
            },
            {
              "letter": "B",
              "text": "on"
            },
            {
              "letter": "C",
              "text": "in"
            },
            {
              "letter": "D",
              "text": "over"
            }
          ],
          "answer": "B",
          "explanation": "Chỉ vị trí trên trang giấy: *on the page* = trên trang"
        },
        {
          "num": "11",
          "text": "The keynote speaker for the technology seminar is expected to arrive _______ exactly 9:30 AM.",
          "options": [
            {
              "letter": "A",
              "text": "to"
            },
            {
              "letter": "B",
              "text": "in"
            },
            {
              "letter": "C",
              "text": "on"
            },
            {
              "letter": "D",
              "text": "at"
            }
          ],
          "answer": "D",
          "explanation": "Đi với một giờ giấc cụ thể: *at exactly 9:30 AM*"
        },
        {
          "num": "12",
          "text": "We are currently planning to open three new retail stores _______ Tokyo next year.",
          "options": [
            {
              "letter": "A",
              "text": "in"
            },
            {
              "letter": "B",
              "text": "at"
            },
            {
              "letter": "C",
              "text": "on"
            },
            {
              "letter": "D",
              "text": "into"
            }
          ],
          "answer": "A",
          "explanation": "Đi với không gian lớn như thành phố, quốc gia: *in Tokyo*"
        },
        {
          "num": "13",
          "text": "The customer service desk will remain open _______ midnight to assist guests with late check-ins.",
          "options": [
            {
              "letter": "A",
              "text": "until"
            },
            {
              "letter": "B",
              "text": "by"
            },
            {
              "letter": "C",
              "text": "within"
            },
            {
              "letter": "D",
              "text": "about"
            }
          ],
          "answer": "A",
          "explanation": "Chỉ hành động kéo dài liên tục đến một thời điểm: *remain open until midnight* = mở cửa liên tục đến nửa đêm"
        },
        {
          "num": "14",
          "text": "Please park your delivery vehicle in the designated area _______ the main entrance.",
          "options": [
            {
              "letter": "A",
              "text": "near"
            },
            {
              "letter": "B",
              "text": "nearly"
            },
            {
              "letter": "C",
              "text": "next"
            },
            {
              "letter": "D",
              "text": "closest"
            }
          ],
          "answer": "A",
          "explanation": "Nghĩa là \"gần\". \"nearly\" là trạng từ mức độ, \"next\" phải đi với \"to\", \"closest\" phải có \"the\""
        },
        {
          "num": "15",
          "text": "Customers can return defective items for a full refund _______ 14 days of purchase.",
          "options": [
            {
              "letter": "A",
              "text": "between"
            },
            {
              "letter": "B",
              "text": "within"
            },
            {
              "letter": "C",
              "text": "among"
            },
            {
              "letter": "D",
              "text": "along"
            }
          ],
          "answer": "B",
          "explanation": "Chỉ giới hạn thời gian: *within 14 days* = trong vòng 14 ngày"
        }
      ]
    },
    "07": {
      "title": "Liên từ",
      "questions": [
        {
          "num": "1",
          "text": "The new smartphone is highly innovative, _______ it is too expensive for the average consumer.",
          "options": [
            {
              "letter": "A",
              "text": "but"
            },
            {
              "letter": "B",
              "text": "or"
            },
            {
              "letter": "C",
              "text": "so"
            },
            {
              "letter": "D",
              "text": "and"
            }
          ],
          "answer": "A",
          "explanation": "Hai mệnh đề mang ý nghĩa trái ngược nhau: rất sáng tạo *nhưng* quá đắt"
        },
        {
          "num": "2",
          "text": "_______ the road construction is causing severe traffic jams, employees are allowed to work from home this week.",
          "options": [
            {
              "letter": "A",
              "text": "Although"
            },
            {
              "letter": "B",
              "text": "Because"
            },
            {
              "letter": "C",
              "text": "Therefore"
            },
            {
              "letter": "D",
              "text": "Due to"
            }
          ],
          "answer": "B",
          "explanation": "Chỉ nguyên nhân. Phía sau là một mệnh đề hoàn chỉnh nên dùng \"Because\", không dùng giới từ \"Due to\""
        },
        {
          "num": "3",
          "text": "The annual training program is designed for _______ new hires and experienced staff members.",
          "options": [
            {
              "letter": "A",
              "text": "either"
            },
            {
              "letter": "B",
              "text": "neither"
            },
            {
              "letter": "C",
              "text": "both"
            },
            {
              "letter": "D",
              "text": "whether"
            }
          ],
          "answer": "C",
          "explanation": "Cấu trúc tương quan: **both A and B** = cả A và B"
        },
        {
          "num": "4",
          "text": "_______ the marketing budget was reduced, the team still managed to launch a highly successful campaign.",
          "options": [
            {
              "letter": "A",
              "text": "Even though"
            },
            {
              "letter": "B",
              "text": "Despite"
            },
            {
              "letter": "C",
              "text": "However"
            },
            {
              "letter": "D",
              "text": "Nevertheless"
            }
          ],
          "answer": "A",
          "explanation": "Chỉ sự nhượng bộ. Phía sau là một mệnh đề hoàn chỉnh nên dùng \"Even though\", không dùng giới từ \"Despite\""
        },
        {
          "num": "5",
          "text": "You will not be allowed to enter the laboratory _______ you wear the proper safety equipment.",
          "options": [
            {
              "letter": "A",
              "text": "if"
            },
            {
              "letter": "B",
              "text": "unless"
            },
            {
              "letter": "C",
              "text": "except"
            },
            {
              "letter": "D",
              "text": "without"
            }
          ],
          "answer": "B",
          "explanation": "Liên từ chỉ điều kiện mang nghĩa phủ định: **unless** = trừ khi / nếu không"
        },
        {
          "num": "6",
          "text": "_______ the final contract is signed, we will begin the construction of the new office building.",
          "options": [
            {
              "letter": "A",
              "text": "Once"
            },
            {
              "letter": "B",
              "text": "While"
            },
            {
              "letter": "C",
              "text": "During"
            },
            {
              "letter": "D",
              "text": "Because of"
            }
          ],
          "answer": "A",
          "explanation": "Liên từ chỉ thời gian: **Once** = Một khi / Ngay sau khi. \"During\" và \"Because of\" là giới từ"
        },
        {
          "num": "7",
          "text": "Applicants must submit _______ a copy of their passport or a valid driver's license for identification.",
          "options": [
            {
              "letter": "A",
              "text": "both"
            },
            {
              "letter": "B",
              "text": "neither"
            },
            {
              "letter": "C",
              "text": "either"
            },
            {
              "letter": "D",
              "text": "only"
            }
          ],
          "answer": "C",
          "explanation": "Cấu trúc tương quan: **either A or B** = hoặc A hoặc B. Dấu hiệu nhận biết là chữ \"or\" ở phía sau"
        },
        {
          "num": "8",
          "text": "_______ Mr. Davis prefers to work early in the morning, his business partner is more productive at night.",
          "options": [
            {
              "letter": "A",
              "text": "Since"
            },
            {
              "letter": "B",
              "text": "While"
            },
            {
              "letter": "C",
              "text": "When"
            },
            {
              "letter": "D",
              "text": "Because"
            }
          ],
          "answer": "B",
          "explanation": "Liên từ chỉ sự đối lập/song song: **While** = Trong khi. Một người thích làm sáng, người kia làm tối"
        },
        {
          "num": "9",
          "text": "Please make sure to back up all your important files _______ you update the computer's operating system.",
          "options": [
            {
              "letter": "A",
              "text": "before"
            },
            {
              "letter": "B",
              "text": "soon"
            },
            {
              "letter": "C",
              "text": "then"
            },
            {
              "letter": "D",
              "text": "ahead"
            }
          ],
          "answer": "A",
          "explanation": "Liên từ chỉ thời gian: **before** = trước khi"
        },
        {
          "num": "10",
          "text": "You can return the defective merchandise for a full refund _______ you have the original receipt.",
          "options": [
            {
              "letter": "A",
              "text": "as long as"
            },
            {
              "letter": "B",
              "text": "as well as"
            },
            {
              "letter": "C",
              "text": "as far as"
            },
            {
              "letter": "D",
              "text": "as soon as"
            }
          ],
          "answer": "A",
          "explanation": "Liên từ chỉ điều kiện: **as long as** = miễn là, với điều kiện là"
        },
        {
          "num": "11",
          "text": "The newly hired consultant is _______ highly experienced in finance but also fluent in three languages.",
          "options": [
            {
              "letter": "A",
              "text": "both"
            },
            {
              "letter": "B",
              "text": "either"
            },
            {
              "letter": "C",
              "text": "neither"
            },
            {
              "letter": "D",
              "text": "not only"
            }
          ],
          "answer": "D",
          "explanation": "Cấu trúc tương quan: **not only A but also B** = không những A mà còn B. Dấu hiệu là \"but also\" ở phía sau"
        },
        {
          "num": "12",
          "text": "_______ the printer is currently out of order, please send your documents to the machine on the second floor.",
          "options": [
            {
              "letter": "A",
              "text": "Due to"
            },
            {
              "letter": "B",
              "text": "Since"
            },
            {
              "letter": "C",
              "text": "Therefore"
            },
            {
              "letter": "D",
              "text": "However"
            }
          ],
          "answer": "B",
          "explanation": "Liên từ chỉ nguyên nhân: **Since** = Bởi vì (= Because). Phía sau là mệnh đề nên không dùng \"Due to\", cũng không dùng trạng từ \"Therefore\" đứng đầu câu ghép"
        },
        {
          "num": "13",
          "text": "Do not turn off the main power switch _______ the machine has completely stopped running.",
          "options": [
            {
              "letter": "A",
              "text": "until"
            },
            {
              "letter": "B",
              "text": "within"
            },
            {
              "letter": "C",
              "text": "by"
            },
            {
              "letter": "D",
              "text": "from"
            }
          ],
          "answer": "A",
          "explanation": "Liên từ chỉ thời gian: **until** = cho đến khi"
        },
        {
          "num": "14",
          "text": "The company upgraded its server infrastructure _______ employees could access the database more quickly.",
          "options": [
            {
              "letter": "A",
              "text": "in order to"
            },
            {
              "letter": "B",
              "text": "so that"
            },
            {
              "letter": "C",
              "text": "as if"
            },
            {
              "letter": "D",
              "text": "because of"
            }
          ],
          "answer": "B",
          "explanation": "Liên từ chỉ mục đích: **so that + mệnh đề** = để mà. \"in order to\" phải cộng với động từ nguyên thể"
        },
        {
          "num": "15",
          "text": "Unfortunately, _______ the manager nor his assistant was available to answer the client's questions yesterday.",
          "options": [
            {
              "letter": "A",
              "text": "either"
            },
            {
              "letter": "B",
              "text": "neither"
            },
            {
              "letter": "C",
              "text": "both"
            },
            {
              "letter": "D",
              "text": "not only"
            }
          ],
          "answer": "B",
          "explanation": "Cấu trúc tương quan: **neither A nor B** = không A cũng không B. Dấu hiệu nhận biết là chữ \"nor\" ở phía sau"
        }
      ]
    },
    "08": {
      "title": "Thán từ",
      "questions": []
    },
    "09": {
      "title": "Hạn định từ",
      "questions": [
        {
          "num": "1",
          "text": "_______ employee is required to wear a security badge at all times while inside the building.",
          "options": [
            {
              "letter": "A",
              "text": "All"
            },
            {
              "letter": "B",
              "text": "Every"
            },
            {
              "letter": "C",
              "text": "Most"
            },
            {
              "letter": "D",
              "text": "Several"
            }
          ],
          "answer": "B",
          "explanation": "Đi với danh từ đếm được số ít \"employee\". \"All, Most, Several\" phải đi với danh từ số nhiều \"employees\""
        },
        {
          "num": "2",
          "text": "The customer service manager was surprised to receive so _______ complaints about the new software update.",
          "options": [
            {
              "letter": "A",
              "text": "much"
            },
            {
              "letter": "B",
              "text": "many"
            },
            {
              "letter": "C",
              "text": "little"
            },
            {
              "letter": "D",
              "text": "any"
            }
          ],
          "answer": "B",
          "explanation": "Đi với danh từ đếm được số nhiều \"complaints\". \"much, little\" đi với danh từ không đếm được"
        },
        {
          "num": "3",
          "text": "The printer on the second floor is currently out of order, so please use _______ one down the hall.",
          "options": [
            {
              "letter": "A",
              "text": "other"
            },
            {
              "letter": "B",
              "text": "others"
            },
            {
              "letter": "C",
              "text": "another"
            },
            {
              "letter": "D",
              "text": "the others"
            }
          ],
          "answer": "C",
          "explanation": "Đi với đại từ số ít \"one\" -> một cái khác. \"other\" đi với danh từ số nhiều/không đếm được, \"others\" là đại từ không cộng với danh từ nào"
        },
        {
          "num": "4",
          "text": "The research and development team spent _______ time analyzing consumer trends before launching the product.",
          "options": [
            {
              "letter": "A",
              "text": "many"
            },
            {
              "letter": "B",
              "text": "several"
            },
            {
              "letter": "C",
              "text": "much"
            },
            {
              "letter": "D",
              "text": "a few"
            }
          ],
          "answer": "C",
          "explanation": "Đi với danh từ không đếm được \"time\". Các đáp án còn lại đi với danh từ đếm được số nhiều"
        },
        {
          "num": "5",
          "text": "We have very _______ time left before the presentation starts, so let's finalize the slides quickly.",
          "options": [
            {
              "letter": "A",
              "text": "few"
            },
            {
              "letter": "B",
              "text": "a few"
            },
            {
              "letter": "C",
              "text": "little"
            },
            {
              "letter": "D",
              "text": "many"
            }
          ],
          "answer": "C",
          "explanation": "Đi với danh từ không đếm được \"time\", mang nghĩa là \"rất ít, hầu như không có\". \"few\" đi với danh từ đếm được"
        },
        {
          "num": "6",
          "text": "_______ of the candidates applying for the senior developer position have at least five years of experience.",
          "options": [
            {
              "letter": "A",
              "text": "Every"
            },
            {
              "letter": "B",
              "text": "Much"
            },
            {
              "letter": "C",
              "text": "All"
            },
            {
              "letter": "D",
              "text": "Almost"
            }
          ],
          "answer": "C",
          "explanation": "Cấu trúc \"All of the + N số nhiều\" -> Tất cả những... \"Almost\" là trạng từ, muốn dùng phải viết là \"Almost all of\""
        },
        {
          "num": "7",
          "text": "If you have _______ questions regarding the new vacation policy, please contact the human resources department.",
          "options": [
            {
              "letter": "A",
              "text": "some"
            },
            {
              "letter": "B",
              "text": "any"
            },
            {
              "letter": "C",
              "text": "much"
            },
            {
              "letter": "D",
              "text": "every"
            }
          ],
          "answer": "B",
          "explanation": "Dùng trong câu nghi vấn hoặc mệnh đề điều kiện \"If\", đi được với danh từ số nhiều \"questions\" -> bất cứ câu hỏi nào"
        },
        {
          "num": "8",
          "text": "The CEO visited _______ European countries last month to expand the company's global market presence.",
          "options": [
            {
              "letter": "A",
              "text": "much"
            },
            {
              "letter": "B",
              "text": "every"
            },
            {
              "letter": "C",
              "text": "several"
            },
            {
              "letter": "D",
              "text": "another"
            }
          ],
          "answer": "C",
          "explanation": "Đi với danh từ số nhiều \"countries\" -> một vài quốc gia. \"every, another\" đi với danh từ số ít"
        },
        {
          "num": "9",
          "text": "In addition to the main office in New York, the firm has three _______ branches located in Asia.",
          "options": [
            {
              "letter": "A",
              "text": "another"
            },
            {
              "letter": "B",
              "text": "other"
            },
            {
              "letter": "C",
              "text": "others"
            },
            {
              "letter": "D",
              "text": "the others"
            }
          ],
          "answer": "B",
          "explanation": "Đi trước danh từ số nhiều \"branches\" -> các chi nhánh khác"
        },
        {
          "num": "10",
          "text": "_______ of the board members was given a confidential copy of the annual financial report.",
          "options": [
            {
              "letter": "A",
              "text": "All"
            },
            {
              "letter": "B",
              "text": "Most"
            },
            {
              "letter": "C",
              "text": "Each"
            },
            {
              "letter": "D",
              "text": "Several"
            }
          ],
          "answer": "C",
          "explanation": "Động từ trong câu là \"was\" (số ít). Cấu trúc \"Each of the + N số nhiều\" chia động từ số ít. \"All, Most, Several\" sẽ chia động từ số nhiều là \"were\""
        },
        {
          "num": "11",
          "text": "The IT technician needs just _______ more days to completely fix the server connectivity issues.",
          "options": [
            {
              "letter": "A",
              "text": "a little"
            },
            {
              "letter": "B",
              "text": "much"
            },
            {
              "letter": "C",
              "text": "a few"
            },
            {
              "letter": "D",
              "text": "every"
            }
          ],
          "answer": "C",
          "explanation": "Đi với danh từ đếm được số nhiều \"days\" -> một vài ngày nữa"
        },
        {
          "num": "12",
          "text": "Unfortunately, there were _______ empty seats left in the auditorium when the keynote speaker began his speech.",
          "options": [
            {
              "letter": "A",
              "text": "none"
            },
            {
              "letter": "B",
              "text": "no"
            },
            {
              "letter": "C",
              "letter": "D",
              "text": "nothing"
            }
          ],
          "answer": "B",
          "explanation": "Là hạn định từ đứng trước cụm danh từ \"empty seats\" -> không có ghế trống nào. \"none, nothing\" là đại từ, không đứng trước danh từ"
        },
        {
          "num": "13",
          "text": "_______ employees in the sales department are required to attend the weekly product training sessions.",
          "options": [
            {
              "letter": "A",
              "text": "Most"
            },
            {
              "letter": "B",
              "text": "Almost"
            },
            {
              "letter": "C",
              "text": "Much"
            },
            {
              "letter": "D",
              "text": "Every"
            }
          ],
          "answer": "A",
          "explanation": "Đi trực tiếp với danh từ số nhiều \"employees\" -> Hầu hết. Nếu dùng \"Almost\" phải có \"all\" -> Almost all employees"
        },
        {
          "num": "14",
          "text": "The supervisor reviewed the two proposals and concluded that _______ designs were highly innovative.",
          "options": [
            {
              "letter": "A",
              "text": "either"
            },
            {
              "letter": "B",
              "text": "neither"
            },
            {
              "letter": "C",
              "text": "all"
            },
            {
              "letter": "D",
              "text": "both"
            }
          ],
          "answer": "D",
          "explanation": "Ngữ cảnh câu có \"two proposals\" (hai bản đề xuất) nên dùng \"both\" -> cả hai bản thiết kế"
        },
        {
          "num": "15",
          "text": "The new fitness center is open 24 hours a day, so members can use the facilities at _______ time.",
          "options": [
            {
              "letter": "A",
              "text": "all"
            },
            {
              "letter": "B",
              "text": "any"
            },
            {
              "letter": "C",
              "text": "some"
            },
            {
              "letter": "D",
              "text": "many"
            }
          ],
          "answer": "B",
          "explanation": "Dùng trong câu khẳng định mang nghĩa \"bất cứ\": \"at any time\" = vào bất cứ lúc nào"
        }
      ]
    }
  };


  // Tenses exercises
  Object.assign(exercisesData, {
    "10": {
      "title": "Hiện tại đơn (Present Simple)",
      "questions": [
        {
          "num": "1",
          "text": "The factory _______ its operations at 8:00 AM every morning.",
          "options": [
            {
              "letter": "A",
              "text": "start"
            },
            {
              "letter": "B",
              "text": "starts"
            },
            {
              "letter": "C",
              "text": "is starting"
            },
            {
              "letter": "D",
              "text": "started"
            }
          ],
          "answer": "B",
          "explanation": "Chủ ngữ \"The factory\" số ít + \"every morning\""
        },
        {
          "num": "2",
          "text": "Mr. Smith normally _______ public transportation to commute to the office.",
          "options": [
            {
              "letter": "A",
              "text": "take"
            },
            {
              "letter": "B",
              "text": "takes"
            },
            {
              "letter": "C",
              "text": "taking"
            },
            {
              "letter": "D",
              "text": "is taking"
            }
          ],
          "answer": "B",
          "explanation": "Chủ ngữ \"Mr. Smith\" số ít + trạng từ \"normally\""
        },
        {
          "num": "3",
          "text": "The quarterly report always _______ a detailed summary of our financial status.",
          "options": [
            {
              "letter": "A",
              "text": "includes"
            },
            {
              "letter": "B",
              "text": "include"
            },
            {
              "letter": "C",
              "text": "included"
            },
            {
              "letter": "D",
              "text": "including"
            }
          ],
          "answer": "A",
          "explanation": "Chủ ngữ \"The quarterly report\" số ít + trạng từ \"always\""
        },
        {
          "num": "4",
          "text": "_______ the new software system require a high-speed internet connection?",
          "options": [
            {
              "letter": "A",
              "text": "Do"
            },
            {
              "letter": "B",
              "text": "Does"
            },
            {
              "letter": "C",
              "text": "Is"
            },
            {
              "letter": "D",
              "text": "Has"
            }
          ],
          "answer": "B",
          "explanation": "Câu hỏi với chủ ngữ \"the new software system\" số ít"
        },
        {
          "num": "5",
          "text": "Our delivery personnel rarely _______ packages on weekends.",
          "options": [
            {
              "letter": "A",
              "text": "delivers"
            },
            {
              "letter": "B",
              "text": "deliver"
            },
            {
              "letter": "C",
              "text": "delivered"
            },
            {
              "letter": "D",
              "text": "delivering"
            }
          ],
          "answer": "B",
          "explanation": "Chủ ngữ \"personnel\" là danh từ tập hợp mang nghĩa số nhiều (nhân viên) + \"rarely\""
        }
      ]
    },
    "11": {
      "title": "Hiện tại tiếp diễn (Present Continuous)",
      "questions": [
        {
          "num": "1",
          "text": "The maintenance team _______ the air conditioning units on the third floor right now.",
          "options": [
            {
              "letter": "A",
              "text": "repair"
            },
            {
              "letter": "B",
              "text": "repairs"
            },
            {
              "letter": "C",
              "text": "is repairing"
            },
            {
              "letter": "D",
              "text": "are repairing"
            }
          ],
          "answer": "C",
          "explanation": "Chủ ngữ \"The maintenance team\" số ít trong TOEIC Mỹ + \"right now\""
        },
        {
          "num": "2",
          "text": "We _______ a new marketing strategy to attract younger customers this month.",
          "options": [
            {
              "letter": "A",
              "text": "develop"
            },
            {
              "letter": "B",
              "text": "develops"
            },
            {
              "letter": "C",
              "text": "are developing"
            },
            {
              "letter": "D",
              "text": "developed"
            }
          ],
          "answer": "C",
          "explanation": "Chủ ngữ \"We\" số nhiều + \"this month\" chỉ kế hoạch/hành động tạm thời"
        },
        {
          "num": "3",
          "text": "Please be quiet; the CEO _______ a video conference with the overseas clients.",
          "options": [
            {
              "letter": "A",
              "text": "has"
            },
            {
              "letter": "B",
              "text": "have"
            },
            {
              "letter": "C",
              "text": "is having"
            },
            {
              "letter": "D",
              "text": "had"
            }
          ],
          "answer": "C",
          "explanation": "Hành động đang diễn ra tại thời điểm nói: \"Please be quiet\""
        },
        {
          "num": "4",
          "text": "Currently, the local government _______ a new bridge to reduce traffic congestion.",
          "options": [
            {
              "letter": "A",
              "text": "build"
            },
            {
              "letter": "B",
              "text": "built"
            },
            {
              "letter": "C",
              "text": "are building"
            },
            {
              "letter": "D",
              "text": "is building"
            }
          ],
          "answer": "D",
          "explanation": "Chủ ngữ \"the local government\" số ít + \"Currently\""
        },
        {
          "num": "5",
          "text": "_______ Ms. Taylor _______ a training session in the main conference room at the moment?",
          "options": [
            {
              "letter": "A",
              "text": "Is / conducting"
            },
            {
              "letter": "B",
              "text": "Does / conduct"
            },
            {
              "letter": "C",
              "text": "Are / conducting"
            },
            {
              "letter": "D",
              "text": "Has / conducted"
            }
          ],
          "answer": "A",
          "explanation": "Câu hỏi đang diễn ra với \"Ms. Taylor\" số ít + \"at the moment\""
        }
      ]
    },
    "12": {
      "title": "Hiện tại hoàn thành (Present Perfect)",
      "questions": [
        {
          "num": "1",
          "text": "Our company _______ three new branches in Europe so far this year.",
          "options": [
            {
              "letter": "A",
              "text": "opened"
            },
            {
              "letter": "B",
              "text": "opens"
            },
            {
              "letter": "C",
              "text": "has opened"
            },
            {
              "letter": "D",
              "text": "have opened"
            }
          ],
          "answer": "C",
          "explanation": "Chủ ngữ \"Our company\" số ít + \"so far this year\""
        },
        {
          "num": "2",
          "text": "I _______ the final budget report to the board of directors already.",
          "options": [
            {
              "letter": "A",
              "text": "submit"
            },
            {
              "letter": "B",
              "text": "submitted"
            },
            {
              "letter": "C",
              "text": "have submitted"
            },
            {
              "letter": "D",
              "text": "has submitted"
            }
          ],
          "answer": "C",
          "explanation": "Chủ ngữ \"I\" + \"already\""
        },
        {
          "num": "3",
          "text": "The marketing manager _______ highly successful in boosting our online sales since last quarter.",
          "options": [
            {
              "letter": "A",
              "text": "is"
            },
            {
              "letter": "B",
              "text": "was"
            },
            {
              "letter": "C",
              "text": "has been"
            },
            {
              "letter": "D",
              "text": "have been"
            }
          ],
          "answer": "C",
          "explanation": "Chủ ngữ \"The marketing manager\" số ít + \"since last quarter\""
        },
        {
          "num": "4",
          "text": "We _______ a lot of positive feedback from our customers recently.",
          "options": [
            {
              "letter": "A",
              "text": "receive"
            },
            {
              "letter": "B",
              "text": "are receiving"
            },
            {
              "letter": "C",
              "text": "has received"
            },
            {
              "letter": "D",
              "text": "have received"
            }
          ],
          "answer": "D",
          "explanation": "Chủ ngữ \"We\" + \"recently\""
        },
        {
          "num": "5",
          "text": "_______ you _______ the updated policy handbook yet?",
          "options": [
            {
              "letter": "A",
              "text": "Did / read"
            },
            {
              "letter": "B",
              "text": "Have / read"
            },
            {
              "letter": "C",
              "text": "Are / reading"
            },
            {
              "letter": "D",
              "text": "Has / read"
            }
          ],
          "answer": "B",
          "explanation": "Câu hỏi trải nghiệm/hoàn tất với chủ ngữ \"you\" + \"yet\""
        }
      ]
    },
    "13": {
      "title": "Hiện tại hoàn thành tiếp diễn (Present Perfect Continuous)",
      "questions": [
        {
          "num": "1",
          "text": "The IT department _______ the server issues for over three hours.",
          "options": [
            {
              "letter": "A",
              "text": "fixed"
            },
            {
              "letter": "B",
              "text": "has fixed"
            },
            {
              "letter": "C",
              "text": "has been fixing"
            },
            {
              "letter": "D",
              "text": "have been fixing"
            }
          ],
          "answer": "C",
          "explanation": "Chủ ngữ \"The IT department\" số ít + \"for over three hours\" nhấn mạnh quá trình"
        },
        {
          "num": "2",
          "text": "We _______ hard on this joint venture since the beginning of the year.",
          "options": [
            {
              "letter": "A",
              "text": "work"
            },
            {
              "letter": "B",
              "text": "worked"
            },
            {
              "letter": "C",
              "text": "have been working"
            },
            {
              "letter": "D",
              "text": "has been working"
            }
          ],
          "answer": "C",
          "explanation": "Chủ ngữ \"We\" + \"since the beginning...\" nhấn mạnh sự liên tục"
        },
        {
          "num": "3",
          "text": "Mr. Jenkins _______ about the poor internet connection all morning.",
          "options": [
            {
              "letter": "A",
              "text": "complains"
            },
            {
              "letter": "B",
              "text": "complained"
            },
            {
              "letter": "C",
              "text": "has been complaining"
            },
            {
              "letter": "D",
              "text": "have been complaining"
            }
          ],
          "answer": "C",
          "explanation": "Chủ ngữ \"Mr. Jenkins\" số ít + \"all morning\""
        },
        {
          "num": "4",
          "text": "They _______ for the keynote speaker to arrive for more than an hour.",
          "options": [
            {
              "letter": "A",
              "text": "wait"
            },
            {
              "letter": "B",
              "text": "are waiting"
            },
            {
              "letter": "C",
              "text": "has been waiting"
            },
            {
              "letter": "D",
              "text": "have been waiting"
            }
          ],
          "answer": "D",
          "explanation": "Chủ ngữ \"They\" + \"for more than an hour\""
        },
        {
          "num": "5",
          "text": "How long _______ she _______ as the lead developer for this project?",
          "options": [
            {
              "letter": "A",
              "text": "did / serve"
            },
            {
              "letter": "B",
              "text": "is / serving"
            },
            {
              "letter": "C",
              "text": "has / been serving"
            },
            {
              "letter": "D",
              "text": "have / been serving"
            }
          ],
          "answer": "C",
          "explanation": "Câu hỏi \"How long\" với chủ ngữ \"she\""
        }
      ]
    },
    "14": {
      "title": "Quá khứ đơn (Past Simple)",
      "questions": [
        {
          "num": "1",
          "text": "The board of directors _______ the proposed budget during yesterday's meeting.",
          "options": [
            {
              "letter": "A",
              "text": "approve"
            },
            {
              "letter": "B",
              "text": "approved"
            },
            {
              "letter": "C",
              "text": "approves"
            },
            {
              "letter": "D",
              "text": "has approved"
            }
          ],
          "answer": "B",
          "explanation": "Dấu hiệu \"yesterday\""
        },
        {
          "num": "2",
          "text": "Ms. White _______ the company as a junior accountant five years ago.",
          "options": [
            {
              "letter": "A",
              "text": "joins"
            },
            {
              "letter": "B",
              "text": "joined"
            },
            {
              "letter": "C",
              "text": "has joined"
            },
            {
              "letter": "D",
              "text": "is joining"
            }
          ],
          "answer": "B",
          "explanation": "Dấu hiệu \"five years ago\""
        },
        {
          "num": "3",
          "text": "We _______ a significant drop in raw material prices last month.",
          "options": [
            {
              "letter": "A",
              "text": "notice"
            },
            {
              "letter": "B",
              "text": "noticed"
            },
            {
              "letter": "C",
              "text": "have noticed"
            },
            {
              "letter": "D",
              "text": "notices"
            }
          ],
          "answer": "B",
          "explanation": "Dấu hiệu \"last month\""
        },
        {
          "num": "4",
          "text": "_______ the client sign the contract before leaving the office?",
          "options": [
            {
              "letter": "A",
              "text": "Do"
            },
            {
              "letter": "B",
              "text": "Does"
            },
            {
              "letter": "C",
              "text": "Did"
            },
            {
              "letter": "D",
              "text": "Was"
            }
          ],
          "answer": "C",
          "explanation": "Câu hỏi ở quá khứ do hành động đã xảy ra \"before leaving\""
        },
        {
          "num": "5",
          "text": "The delivery truck _______ down on its way to the warehouse on Monday.",
          "options": [
            {
              "letter": "A",
              "text": "break"
            },
            {
              "letter": "B",
              "text": "breaks"
            },
            {
              "letter": "C",
              "text": "broke"
            },
            {
              "letter": "D",
              "text": "broken"
            }
          ],
          "answer": "C",
          "explanation": "Dấu hiệu \"on Monday\" trong ngữ cảnh kể lại sự việc đã qua"
        }
      ]
    },
    "15": {
      "title": "Quá khứ tiếp diễn (Past Continuous)",
      "questions": [
        {
          "num": "1",
          "text": "I _______ the monthly report when the power went out unexpectedly.",
          "options": [
            {
              "letter": "A",
              "text": "type"
            },
            {
              "letter": "B",
              "text": "typed"
            },
            {
              "letter": "C",
              "text": "was typing"
            },
            {
              "letter": "D",
              "text": "am typing"
            }
          ],
          "answer": "C",
          "explanation": "Hành động đang diễn ra trong quá khứ thì bị hành động khác \"went out\" xen vào"
        },
        {
          "num": "2",
          "text": "While the manager _______ the presentation, the fire alarm rang.",
          "options": [
            {
              "letter": "A",
              "text": "gave"
            },
            {
              "letter": "B",
              "text": "was giving"
            },
            {
              "letter": "C",
              "text": "is giving"
            },
            {
              "letter": "D",
              "text": "gives"
            }
          ],
          "answer": "B",
          "explanation": "Tương tự câu 1, hành động đang diễn ra đi sau \"While\""
        },
        {
          "num": "3",
          "text": "They _______ the new layout of the office at 10 AM yesterday.",
          "options": [
            {
              "letter": "A",
              "text": "discuss"
            },
            {
              "letter": "B",
              "text": "discussed"
            },
            {
              "letter": "C",
              "text": "was discussing"
            },
            {
              "letter": "D",
              "text": "were discussing"
            }
          ],
          "answer": "D",
          "explanation": "Hành động xảy ra tại thời điểm xác định trong quá khứ \"at 10 AM yesterday\" + \"They\""
        },
        {
          "num": "4",
          "text": "What _______ you _______ when the client called to cancel the order?",
          "options": [
            {
              "letter": "A",
              "text": "are / doing"
            },
            {
              "letter": "B",
              "text": "did / do"
            },
            {
              "letter": "C",
              "text": "were / doing"
            },
            {
              "letter": "D",
              "text": "have / done"
            }
          ],
          "answer": "C",
          "explanation": "Hỏi về hành động đang diễn ra khi sự việc khác xen vào \"when the client called\""
        },
        {
          "num": "5",
          "text": "The technicians _______ the software system while we were having our lunch break.",
          "options": [
            {
              "letter": "A",
              "text": "upgraded"
            },
            {
              "letter": "B",
              "text": "upgrade"
            },
            {
              "letter": "C",
              "text": "were upgrading"
            },
            {
              "letter": "D",
              "text": "was upgrading"
            }
          ],
          "answer": "C",
          "explanation": "Hai hành động diễn ra song song trong quá khứ với chủ ngữ số nhiều \"The technicians\""
        }
      ]
    },
    "16": {
      "title": "Quá khứ hoàn thành (Past Perfect)",
      "questions": [
        {
          "num": "1",
          "text": "By the time the supervisor arrived, we _______ the inventory check.",
          "options": [
            {
              "letter": "A",
              "text": "finish"
            },
            {
              "letter": "B",
              "text": "finished"
            },
            {
              "letter": "C",
              "text": "have finished"
            },
            {
              "letter": "D",
              "text": "had finished"
            }
          ],
          "answer": "D",
          "explanation": "Hành động xảy ra và hoàn tất trước một hành động khác trong quá khứ \"arrived\""
        },
        {
          "num": "2",
          "text": "The flight _______ already _______ by the time Mr. Brown reached the airport.",
          "options": [
            {
              "letter": "A",
              "text": "has / departed"
            },
            {
              "letter": "B",
              "text": "had / departed"
            },
            {
              "letter": "C",
              "text": "is / departing"
            },
            {
              "letter": "D",
              "text": "did / depart"
            }
          ],
          "answer": "B",
          "explanation": "Tương tự câu 1, chuyến bay đi trước khi ông Brown tới \"reached\""
        },
        {
          "num": "3",
          "text": "She realized that she _______ her identification badge at home.",
          "options": [
            {
              "letter": "A",
              "text": "leaves"
            },
            {
              "letter": "B",
              "text": "left"
            },
            {
              "letter": "C",
              "text": "had left"
            },
            {
              "letter": "D",
              "text": "has left"
            }
          ],
          "answer": "C",
          "explanation": "Hành động để quên xảy ra trước hành động nhận ra \"realized\""
        },
        {
          "num": "4",
          "text": "The company _______ rapidly before the economic crisis hit the region.",
          "options": [
            {
              "letter": "A",
              "text": "grows"
            },
            {
              "letter": "B",
              "text": "grew"
            },
            {
              "letter": "C",
              "text": "has grown"
            },
            {
              "letter": "D",
              "text": "had grown"
            }
          ],
          "answer": "D",
          "explanation": "Hành động phát triển xảy ra trước khủng hoảng \"hit\""
        },
        {
          "num": "5",
          "text": "_______ they _______ the software before they launched the product?",
          "options": [
            {
              "letter": "A",
              "text": "Have / tested"
            },
            {
              "letter": "B",
              "text": "Had / tested"
            },
            {
              "letter": "C",
              "text": "Did / test"
            },
            {
              "letter": "D",
              "text": "Do / test"
            }
          ],
          "answer": "B",
          "explanation": "Câu hỏi về việc xảy ra trước một mốc quá khứ \"before they launched\""
        }
      ]
    },
    "17": {
      "title": "Quá khứ hoàn thành tiếp diễn (Past Perfect Continuous)",
      "questions": [
        {
          "num": "1",
          "text": "They _______ the new project for two months before it was suddenly canceled.",
          "options": [
            {
              "letter": "A",
              "text": "plan"
            },
            {
              "letter": "B",
              "text": "are planning"
            },
            {
              "letter": "C",
              "text": "had been planning"
            },
            {
              "letter": "D",
              "text": "have been planning"
            }
          ],
          "answer": "C",
          "explanation": "Nhấn mạnh quá trình 2 tháng trước khi bị hủy \"was canceled\""
        },
        {
          "num": "2",
          "text": "Ms. Garcia _______ at the firm for ten years before she decided to start her own business.",
          "options": [
            {
              "letter": "A",
              "text": "works"
            },
            {
              "letter": "B",
              "text": "worked"
            },
            {
              "letter": "C",
              "text": "has been working"
            },
            {
              "letter": "D",
              "text": "had been working"
            }
          ],
          "answer": "D",
          "explanation": "Nhấn mạnh quá trình 10 năm trước khi quyết định \"decided\""
        },
        {
          "num": "3",
          "text": "We _______ for the delivery all morning when they finally called to say it was delayed.",
          "options": [
            {
              "letter": "A",
              "text": "wait"
            },
            {
              "letter": "B",
              "text": "have been waiting"
            },
            {
              "letter": "C",
              "text": "had been waiting"
            },
            {
              "letter": "D",
              "text": "are waiting"
            }
          ],
          "answer": "C",
          "explanation": "Nhấn mạnh quá trình chờ đợi cả buổi sáng trước khi họ gọi \"called\""
        },
        {
          "num": "4",
          "text": "The engine _______ strange noises for several days before it completely broke down.",
          "options": [
            {
              "letter": "A",
              "text": "made"
            },
            {
              "letter": "B",
              "text": "makes"
            },
            {
              "letter": "C",
              "text": "had been making"
            },
            {
              "letter": "D",
              "text": "has been making"
            }
          ],
          "answer": "C",
          "explanation": "Nhấn mạnh quá trình liên tục vài ngày trước khi hỏng \"broke down\""
        },
        {
          "num": "5",
          "text": "How long _______ you _______ Spanish before you moved to Madrid?",
          "options": [
            {
              "letter": "A",
              "text": "have / been studying"
            },
            {
              "letter": "B",
              "text": "had / been studying"
            },
            {
              "letter": "C",
              "text": "did / study"
            },
            {
              "letter": "D",
              "text": "are / studying"
            }
          ],
          "answer": "B",
          "explanation": "Hỏi về khoảng thời gian liên tục trước một sự việc quá khứ \"moved\""
        }
      ]
    },
    "18": {
      "title": "Tương lai đơn (Future Simple)",
      "questions": [
        {
          "num": "1",
          "text": "The CEO _______ the merger details at the press conference tomorrow.",
          "options": [
            {
              "letter": "A",
              "text": "announce"
            },
            {
              "letter": "B",
              "text": "announced"
            },
            {
              "letter": "C",
              "text": "will announce"
            },
            {
              "letter": "D",
              "text": "has announced"
            }
          ],
          "answer": "C",
          "explanation": "Dấu hiệu \"tomorrow\""
        },
        {
          "num": "2",
          "text": "If sales continue to rise, we _______ our annual target by November.",
          "options": [
            {
              "letter": "A",
              "text": "reach"
            },
            {
              "letter": "B",
              "text": "reached"
            },
            {
              "letter": "C",
              "text": "will reach"
            },
            {
              "letter": "D",
              "text": "are reaching"
            }
          ],
          "answer": "C",
          "explanation": "Câu điều kiện loại 1"
        },
        {
          "num": "3",
          "text": "I promise I _______ the document to your assistant by the end of the day.",
          "options": [
            {
              "letter": "A",
              "text": "send"
            },
            {
              "letter": "B",
              "text": "sent"
            },
            {
              "letter": "C",
              "text": "will send"
            },
            {
              "letter": "D",
              "text": "sending"
            }
          ],
          "answer": "C",
          "explanation": "Lời hứa \"I promise\""
        },
        {
          "num": "4",
          "text": "_______ the new policy apply to all remote workers next year?",
          "options": [
            {
              "letter": "A",
              "text": "Do"
            },
            {
              "letter": "B",
              "text": "Does"
            },
            {
              "letter": "C",
              "text": "Will"
            },
            {
              "letter": "D",
              "text": "Did"
            }
          ],
          "answer": "C",
          "explanation": "Câu hỏi với dấu hiệu \"next year\""
        },
        {
          "num": "5",
          "text": "The weather forecast says it _______ heavily during the outdoor event.",
          "options": [
            {
              "letter": "A",
              "text": "rains"
            },
            {
              "letter": "B",
              "text": "rained"
            },
            {
              "letter": "C",
              "text": "will rain"
            },
            {
              "letter": "D",
              "text": "raining"
            }
          ],
          "answer": "C",
          "explanation": "Dự đoán không có bằng chứng hiện tại, chỉ dựa vào dự báo"
        }
      ]
    },
    "19": {
      "title": "Tương lai gần (Near Future - \"be going to\")",
      "questions": [
        {
          "num": "1",
          "text": "Look at those dark clouds; it _______ heavily very soon.",
          "options": [
            {
              "letter": "A",
              "text": "will rain"
            },
            {
              "letter": "B",
              "text": "is going to rain"
            },
            {
              "letter": "C",
              "text": "rains"
            },
            {
              "letter": "D",
              "text": "has rained"
            }
          ],
          "answer": "B",
          "explanation": "Dự đoán có căn cứ ở hiện tại: \"Look at those dark clouds\""
        },
        {
          "num": "2",
          "text": "The management _______ a new employee wellness program next month.",
          "options": [
            {
              "letter": "A",
              "text": "is going to launch"
            },
            {
              "letter": "B",
              "text": "launched"
            },
            {
              "letter": "C",
              "text": "has launched"
            },
            {
              "letter": "D",
              "text": "launch"
            }
          ],
          "answer": "A",
          "explanation": "Kế hoạch đã được định sẵn của ban quản lý"
        },
        {
          "num": "3",
          "text": "I _______ the marketing conference in Berlin next week. I've already booked the tickets.",
          "options": [
            {
              "letter": "A",
              "text": "attend"
            },
            {
              "letter": "B",
              "text": "attended"
            },
            {
              "letter": "C",
              "text": "am going to attend"
            },
            {
              "letter": "D",
              "text": "have attended"
            }
          ],
          "answer": "C",
          "explanation": "Kế hoạch đã sắp xếp, có dẫn chứng \"I've already booked\""
        },
        {
          "num": "4",
          "text": "_______ they _______ the old office furniture next weekend?",
          "options": [
            {
              "letter": "A",
              "text": "Are / going to replace"
            },
            {
              "letter": "B",
              "text": "Will / replaced"
            },
            {
              "letter": "C",
              "text": "Do / replace"
            },
            {
              "letter": "D",
              "text": "Have / replaced"
            }
          ],
          "answer": "A",
          "explanation": "Hỏi về dự định trong tương lai"
        },
        {
          "num": "5",
          "text": "We _______ more staff to handle the busy holiday season.",
          "options": [
            {
              "letter": "A",
              "text": "hire"
            },
            {
              "letter": "B",
              "text": "hired"
            },
            {
              "letter": "C",
              "text": "have hired"
            },
            {
              "letter": "D",
              "text": "are going to hire"
            }
          ],
          "answer": "D",
          "explanation": "Dự định rõ ràng để giải quyết vấn đề mùa cao điểm"
        }
      ]
    },
    "20": {
      "title": "Tương lai tiếp diễn (Future Continuous)",
      "questions": [
        {
          "num": "1",
          "text": "At 10:00 AM tomorrow, I _______ a meeting with the regional directors.",
          "options": [
            {
              "letter": "A",
              "text": "attend"
            },
            {
              "letter": "B",
              "text": "will be attending"
            },
            {
              "letter": "C",
              "text": "have attended"
            },
            {
              "letter": "D",
              "text": "attended"
            }
          ],
          "answer": "B",
          "explanation": "Hành động sẽ đang diễn ra tại một thời điểm xác định ở tương lai \"At 10:00 AM tomorrow\""
        },
        {
          "num": "2",
          "text": "This time next week, we _______ on a beautiful beach in Hawaii.",
          "options": [
            {
              "letter": "A",
              "text": "relax"
            },
            {
              "letter": "B",
              "text": "relaxed"
            },
            {
              "letter": "C",
              "text": "will be relaxing"
            },
            {
              "letter": "D",
              "text": "are relaxing"
            }
          ],
          "answer": "C",
          "explanation": "Dấu hiệu \"This time next week\""
        },
        {
          "num": "3",
          "text": "The maintenance crew _______ the building's exterior all day next Saturday.",
          "options": [
            {
              "letter": "A",
              "text": "paints"
            },
            {
              "letter": "B",
              "text": "will be painting"
            },
            {
              "letter": "C",
              "text": "painted"
            },
            {
              "letter": "D",
              "text": "has painted"
            }
          ],
          "answer": "B",
          "explanation": "Hành động kéo dài suốt một khoảng thời gian cụ thể ở tương lai \"all day next Saturday\""
        },
        {
          "num": "4",
          "text": "_______ the team _______ the software upgrade during the midnight shift?",
          "options": [
            {
              "letter": "A",
              "text": "Will / be performing"
            },
            {
              "letter": "B",
              "text": "Do / perform"
            },
            {
              "letter": "C",
              "text": "Have / performed"
            },
            {
              "letter": "D",
              "text": "Did / perform"
            }
          ],
          "answer": "A",
          "explanation": "Hỏi về việc sẽ đang diễn ra trong khoảng thời gian \"midnight shift\""
        },
        {
          "num": "5",
          "text": "Please don't call me at 8 PM; I _______ dinner with a very important client.",
          "options": [
            {
              "letter": "A",
              "text": "have"
            },
            {
              "letter": "B",
              "text": "had"
            },
            {
              "letter": "C",
              "text": "will be having"
            },
            {
              "letter": "D",
              "text": "has"
            }
          ],
          "answer": "C",
          "explanation": "Lý do cho việc không thể làm gì tại một thời điểm tương lai vì lúc đó sẽ đang làm việc khác"
        }
      ]
    },
    "21": {
      "title": "Tương lai hoàn thành (Future Perfect)",
      "questions": [
        {
          "num": "1",
          "text": "By the end of this month, we _______ all the phases of the construction project.",
          "options": [
            {
              "letter": "A",
              "text": "complete"
            },
            {
              "letter": "B",
              "text": "completed"
            },
            {
              "letter": "C",
              "text": "will have completed"
            },
            {
              "letter": "D",
              "text": "have completed"
            }
          ],
          "answer": "C",
          "explanation": "Dấu hiệu \"By the end of this month\""
        },
        {
          "num": "2",
          "text": "By the time you read this email, I _______ for Tokyo.",
          "options": [
            {
              "letter": "A",
              "text": "will leave"
            },
            {
              "letter": "B",
              "text": "leave"
            },
            {
              "letter": "C",
              "text": "will have left"
            },
            {
              "letter": "D",
              "text": "left"
            }
          ],
          "answer": "C",
          "explanation": "Hành động hoàn tất trước một thời điểm ở tương lai \"By the time you read\""
        },
        {
          "num": "3",
          "text": "The mechanic _______ repairing the company vehicle by 5 PM tomorrow.",
          "options": [
            {
              "letter": "A",
              "text": "finish"
            },
            {
              "letter": "B",
              "text": "finishes"
            },
            {
              "letter": "C",
              "text": "will have finished"
            },
            {
              "letter": "D",
              "text": "finished"
            }
          ],
          "answer": "C",
          "explanation": "Dấu hiệu \"by 5 PM tomorrow\""
        },
        {
          "num": "4",
          "text": "Within five years, our brand _______ a household name across the country.",
          "options": [
            {
              "letter": "A",
              "text": "become"
            },
            {
              "letter": "B",
              "text": "became"
            },
            {
              "letter": "C",
              "text": "will have become"
            },
            {
              "letter": "D",
              "text": "is becoming"
            }
          ],
          "answer": "C",
          "explanation": "Dấu hiệu khoảng thời gian trước tương lai \"Within five years\""
        },
        {
          "num": "5",
          "text": "_______ they _______ the new database by the time the auditors arrive?",
          "options": [
            {
              "letter": "A",
              "text": "Do / install"
            },
            {
              "letter": "B",
              "text": "Will / have installed"
            },
            {
              "letter": "C",
              "text": "Did / install"
            },
            {
              "letter": "D",
              "text": "Are / installing"
            }
          ],
          "answer": "B",
          "explanation": "Câu hỏi hoàn tất trước sự kiện tương lai \"by the time the auditors arrive\""
        }
      ]
    },
    "22": {
      "title": "Tương lai hoàn thành tiếp diễn (Future Perfect Continuous)",
      "questions": [
        {
          "num": "1",
          "text": "By next December, Mr. Chen _______ for this company for exactly twenty years.",
          "options": [
            {
              "letter": "A",
              "text": "will work"
            },
            {
              "letter": "B",
              "text": "works"
            },
            {
              "letter": "C",
              "text": "will have been working"
            },
            {
              "letter": "D",
              "text": "has worked"
            }
          ],
          "answer": "C",
          "explanation": "Nhấn mạnh tính liên tục \"for exactly twenty years\" tính đến mốc \"By next December\""
        },
        {
          "num": "2",
          "text": "By the time the marathon ends, the athletes _______ for over four hours.",
          "options": [
            {
              "letter": "A",
              "text": "run"
            },
            {
              "letter": "B",
              "text": "will run"
            },
            {
              "letter": "C",
              "text": "ran"
            },
            {
              "letter": "D",
              "text": "will have been running"
            }
          ],
          "answer": "D",
          "explanation": "Nhấn mạnh tính liên tục \"for over four hours\" tính đến mốc \"ends\""
        },
        {
          "num": "3",
          "text": "Before the new CEO takes over, the interim team _______ the department for six months.",
          "options": [
            {
              "letter": "A",
              "text": "will manage"
            },
            {
              "letter": "B",
              "text": "will have been managing"
            },
            {
              "letter": "C",
              "text": "managed"
            },
            {
              "letter": "D",
              "text": "manages"
            }
          ],
          "answer": "B",
          "explanation": "Nhấn mạnh tính liên tục \"for six months\" tính đến mốc \"takes over\""
        },
        {
          "num": "4",
          "text": "At 5 PM, I _______ on this financial report for eight straight hours.",
          "options": [
            {
              "letter": "A",
              "text": "work"
            },
            {
              "letter": "B",
              "text": "worked"
            },
            {
              "letter": "C",
              "text": "will have been working"
            },
            {
              "letter": "D",
              "text": "will work"
            }
          ],
          "answer": "C",
          "explanation": "Nhấn mạnh sự liên tục \"for eight straight hours\" tính đến mốc \"At 5 PM\""
        },
        {
          "num": "5",
          "text": "By the end of the year, we _______ English together for three semesters.",
          "options": [
            {
              "letter": "A",
              "text": "study"
            },
            {
              "letter": "B",
              "text": "will have been studying"
            },
            {
              "letter": "C",
              "text": "studied"
            },
            {
              "letter": "D",
              "text": "have studied"
            }
          ],
          "answer": "B",
          "explanation": "Nhấn mạnh sự đồng hành \"for three semesters\" tính đến \"By the end of the year\""
        }
      ]
    }
  });

  var savedAnswers = {};
  var currentSecKey = null;
  var currentQuestionIndex = 0;

  var modal = document.getElementById('exerciseModal');
  var modalTitle = document.getElementById('modalTitle');
  var modalBody = document.getElementById('modalBody');
  var closeBtn = document.getElementById('closeModalBtn');

  function updatePaginationUI(total) {
    var questions = modalBody.querySelectorAll('.quiz-question');
    questions.forEach(function (q, i) {
      if (i === currentQuestionIndex) {
        q.classList.add('is-active');
      } else {
        q.classList.remove('is-active');
      }
    });

    var prevBtn = document.getElementById('quizPrevBtn');
    var nextBtn = document.getElementById('quizNextBtn');
    var progress = document.getElementById('quizProgress');

    if (progress) {
      progress.textContent = (currentQuestionIndex + 1) + ' / ' + total;
    }
    if (prevBtn) {
      prevBtn.disabled = currentQuestionIndex === 0;
    }
    if (nextBtn) {
      nextBtn.disabled = currentQuestionIndex === total - 1;
    }
  }

  window.openExercisePopup = function (secKey) {
    var data = exercisesData[secKey];
    if (!data) return;

    if (!savedAnswers[secKey]) {
      savedAnswers[secKey] = {};
    }

    if (currentSecKey !== secKey) {
      currentSecKey = secKey;
      currentQuestionIndex = 0; // reset to first question
      modalTitle.textContent = 'Bài tập: ' + data.title;

      // Build HTML
      var html = '';
      html += '<div class="quiz-questions-container">';
      data.questions.forEach(function (q, i) {
        var answeredLetter = savedAnswers[secKey][i];

        var qClass = i === 0 ? 'quiz-question is-active' : 'quiz-question';
        html += '<div class="' + qClass + '" id="quiz-q-' + i + '">';
        html += '<div class="quiz-qtext">' + q.num + '. ' + q.text + '</div>';
        html += '<div class="quiz-options">';

        q.options.forEach(function (opt) {
          var btnClass = 'quiz-option';
          var disabled = answeredLetter ? ' disabled' : '';

          if (answeredLetter) {
            if (opt.letter === q.answer) {
              if (answeredLetter === opt.letter) {
                btnClass += ' is-selected is-correct';
              } else {
                btnClass += ' is-correct-reveal';
              }
            } else if (answeredLetter === opt.letter) {
              btnClass += ' is-selected is-wrong';
            }
          }

          html += '<button class="' + btnClass + '" data-qindex="' + i + '" data-letter="' + opt.letter + '"' + disabled + '>';
          html += '<span class="quiz-letter">(' + opt.letter + ')</span>';
          html += '<span class="quiz-text">' + opt.text + '</span>';
          html += '</button>';
        });

        html += '</div>';

        var feedbackClass = answeredLetter ? 'quiz-feedback show' : 'quiz-feedback';
        var feedbackHtml = '';
        if (answeredLetter) {
          if (answeredLetter === q.answer) {
            feedbackHtml = '<strong>Chính xác!</strong> ' + q.explanation;
          } else {
            feedbackHtml = '<strong>Sai rồi!</strong> Đáp án đúng là <strong>(' + q.answer + ')</strong>.<br>' + q.explanation;
          }
        }

        html += '<div class="' + feedbackClass + '" id="feedback-' + i + '">' + feedbackHtml + '</div>';
        html += '</div>';
      });
      html += '</div>';

      // Add navigation
      html += '<div class="quiz-nav">';
      html += '<button id="quizPrevBtn" class="btn btn--primary" aria-label="Quay lại" disabled><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg></button>';
      html += '<span id="quizProgress">1 / ' + data.questions.length + '</span>';
      html += '<button id="quizNextBtn" class="btn btn--primary" aria-label="Tiếp theo"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg></button>';
      html += '</div>';

      modalBody.innerHTML = html;

      // Add event listeners for options
      var options = modalBody.querySelectorAll('.quiz-option');
      options.forEach(function (opt) {
        opt.addEventListener('click', function () {
          if (this.disabled) return;

          var qIndex = this.getAttribute('data-qindex');
          var letter = this.getAttribute('data-letter');
          var qData = data.questions[qIndex];

          savedAnswers[secKey][qIndex] = letter;

          var parent = this.closest('.quiz-options');
          var siblings = parent.querySelectorAll('.quiz-option');
          var feedback = document.getElementById('feedback-' + qIndex);

          // Disable all options for this question
          siblings.forEach(function (s) {
            s.disabled = true;
            if (s.getAttribute('data-letter') === qData.answer) {
              if (s !== opt) {
                s.classList.add('is-correct-reveal');
              }
            }
          });

          this.classList.add('is-selected');

          if (letter === qData.answer) {
            this.classList.add('is-correct');
            feedback.innerHTML = '<strong>Chính xác!</strong> ' + qData.explanation;
          } else {
            this.classList.add('is-wrong');
            feedback.innerHTML = '<strong>Sai rồi!</strong> Đáp án đúng là <strong>(' + qData.answer + ')</strong>.<br>' + qData.explanation;
          }
          feedback.classList.add('show');
        });
      });

      // Add event listeners for navigation
      var prevBtn = document.getElementById('quizPrevBtn');
      var nextBtn = document.getElementById('quizNextBtn');

      if (prevBtn) {
        prevBtn.addEventListener('click', function () {
          if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            updatePaginationUI(data.questions.length);
          }
        });
      }

      if (nextBtn) {
        nextBtn.addEventListener('click', function () {
          if (currentQuestionIndex < data.questions.length - 1) {
            currentQuestionIndex++;
            updatePaginationUI(data.questions.length);
          }
        });
      }
    }

    modal.classList.add('is-open');
  };

  function closeExercisePopup() {
    modal.classList.remove('is-open');
    // Content is no longer cleared here to retain state/DOM
  }

  if (closeBtn) closeBtn.addEventListener('click', closeExercisePopup);
  if (modal) modal.addEventListener('click', function (e) {
    if (e.target === modal) closeExercisePopup();
  });

})();
