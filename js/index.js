(() => {

  function createCalendarSection() {
    const main = document.createElement('main');
    const calendarSection = document.createElement('section');
    const container = document.createElement('div');
    const calendarList = document.createElement('ul');

    main.classList.add('main');
    calendarSection.classList.add('calendar');
    container.classList.add('container', 'calendar__container');
    calendarList.classList.add('calendar__list');

    container.append(calendarList);
    calendarSection.append(container);
    main.append(calendarSection);

    return {
      main,
      calendarList
    };
  };

  function createConferenceCard(dates, img, title, descr, location, url) {
    const cardWrapper = document.createElement('div');
    const dateRange = document.createElement('span');
    const logoImg = document.createElement('img');
    const cardTitle = document.createElement('h2');
    const cardDescription = document.createElement('p');
    const address = document.createElement('address');
    const link = document.createElement('a');
    const conferenceBtnsBlock = document.createElement('div');
    const buyBtn = document.createElement('button');
    const learnMore = document.createElement('a');

    dateRange.textContent = dates;
    logoImg.src = img;
    cardTitle.textContent = title;
    cardDescription.textContent = descr;
    address.textContent = location;
    link.href = url;
    link.textContent = url;
    buyBtn.textContent = 'Купить билет';
    learnMore.textContent = 'Подробнее';

    cardWrapper.classList.add('conference');
    dateRange.classList.add('conference__dates');
    logoImg.classList.add('conference__logo');
    cardTitle.classList.add('conference__title');
    cardDescription.classList.add('conference__descr');
    address.classList.add('conference__address');
    link.classList.add('conference__link');
    conferenceBtnsBlock.classList.add('conference__btn-block')
    buyBtn.classList.add('conference__buy-btn', 'btn-reset', 'primary-btn');
    learnMore.classList.add('conference__learn-more');

    conferenceBtnsBlock.append(
      buyBtn,
      learnMore
    );
    cardWrapper.append(
      dateRange,
      logoImg,
      cardTitle,
      cardDescription,
      address,
      link,
      conferenceBtnsBlock
    );

    return cardWrapper;
  };

  function createFooter() {
    const footer = document.createElement('footer');
    const container = document.createElement('div');
    const contactsWrapper = document.createElement('div');
    const contactsBlock = document.createElement('div');
    const support = document.createElement('p')
    const supportSpan = document.createElement('span');
    const supportEmail = document.createElement('a');
    const supportPhone = document.createElement('a');
    const supportTelegram = document.createElement('a');
    const programCommittee = document.createElement('p');
    const programCommitteeSpan = document.createElement('span');
    const programCommitteeEmail = document.createElement('a');
    const organizationCommittee = document.createElement('p');
    const organizationCommitteeSpan = document.createElement('span');
    const organizationCommitteeEmail = document.createElement('a');
    const address = document.createElement('address');
    const onticoLogo = document.createElement('a');
    const logo = document.createElement('img');
    const navigation = createNavigation();

    supportSpan.textContent = 'По любым вопросам обращайтесь: ';
    support.textContent = `Бухгалтерия&nbsp;и&nbsp;вопросы&nbsp;оплаты: `;
    supportEmail.textContent = 'support@ontico.ru ';
    supportEmail.href = 'mailto:support@ontico.ru';
    supportPhone.textContent = '+7(495) 646-07-68 ';
    supportPhone.href = 'tel:+74956460768';
    supportTelegram.textContent = '@ontico_support';
    supportTelegram.href = '@ontico_support'
    programCommitteeSpan.textContent = 'Программный комитет: ';
    programCommitteeEmail.textContent = 'speakers@ontico.ru';
    programCommitteeEmail.href = 'mailto:speakers@ontico.ru';
    organizationCommitteeSpan.textContent = 'Организационный комитет: ';
    organizationCommitteeEmail.textContent = 'organization@ontico.ru';
    organizationCommitteeEmail.href = 'mailto:organization@ontico.ru';
    address.textContent = '125040, Москва, Нижняя ул., д. 14, стр. 7, подъезд 1, оф. 16 ООО «Конференции Олега Бунина»';
    logo.src = './img/ontico_logo.png';

    footer.classList.add('footer');
    container.classList.add('container', 'footer__container');
    contactsWrapper.classList.add('footer__contacts', 'contacts')
    contactsBlock.classList.add('contacts__textblock');
    supportSpan.classList.add('contacts__text--bold');
    support.classList.add('contacts__text');
    supportEmail.classList.add('contacts__link');
    supportPhone.classList.add('contacts__link');
    supportTelegram.classList.add('contacts__link');
    programCommittee.classList.add('contacts__text');
    programCommitteeSpan.classList.add('contacts__text--bold');
    programCommitteeEmail.classList.add('contacts__link');
    organizationCommittee.classList.add('contacts__text');
    organizationCommitteeSpan.classList.add('contacts__text--bold');
    organizationCommitteeEmail.classList.add('contacts__link');
    address.classList.add('contacts__address');
    onticoLogo.classList.add('footer__logo');
    navigation.classList.add('footer__navigation');

    support.insertAdjacentElement('afterbegin', supportSpan);
    support.append(
      supportEmail,
      supportPhone,
      supportTelegram
    );
    programCommittee.append(
      programCommitteeSpan,
      programCommitteeEmail
    );
    organizationCommittee.append(
      organizationCommitteeSpan,
      organizationCommitteeEmail
    );
    contactsBlock.append(
      support,
      programCommittee,
      organizationCommittee,
      address
    );
    onticoLogo.append(logo);
    contactsWrapper.append(
      contactsBlock,
      onticoLogo
    );
    container.append(
      contactsWrapper,
      navigation
    );
    footer.append(container);

    return footer;
  };

  function createNavigation() {
    const monthArr = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];

    const navigationContainer = document.createElement('div');
    const currentYear = document.createElement('span');
    const navigation = document.createElement('nav');
    const navigationList = document.createElement('ul');

    monthArr.forEach((month) => {
      const navigationListItem = document.createElement('li');
      const monthBtn = document.createElement('button');

      monthBtn.textContent = month;

      navigationListItem.classList.add('navigation__list-item');
      monthBtn.classList.add('navigation__btn', 'btn-reset');

      navigationListItem.append(monthBtn);
      navigationList.append(navigationListItem);
    });

    currentYear.textContent = '2022 год:'

    navigationContainer.classList.add('navigation');
    currentYear.classList.add('navigation__current-year');
    navigation.classList.add('navigation__nav');
    navigationList.classList.add('navigation__list');

    navigation.append(navigationList);
    navigationContainer.append(
      currentYear,
      navigation
    );

    return navigationContainer;
  };

  async function createSite() {
    const main = createCalendarSection();
    const footer = createFooter();
    const response = await fetch('https://conf.ontico.ru/api/conferences/forCalendar.json');
    const data = await response.json();

    document.body.append(main.main, footer);

    data.result.forEach((elem) => {
      const listItem = document.createElement('li');
      listItem.classList.add('calendar__list-item');
      const conferenceCard = createConferenceCard(elem.date_range, elem.logo, elem.name, elem.brief, elem.location, elem.uri);
      listItem.append(conferenceCard);
      main.calendarList.append(listItem);
    });
  };

  createSite();

})();
