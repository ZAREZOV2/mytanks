'use client'

import Header from '../components/Header'
import styles from './page.module.css'

export default function PrivacyPage() {
  return (
    <div className={styles.container}>
      <Header />
      
      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>Политика конфиденциальности</h1>
          <p className={styles.subtitle}>
            Последнее обновление: {new Date().toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className={styles.textContent}>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>1. Общие положения</h2>
              <p>
                Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных 
                пользователей веб-сайта MyTanks (далее — «Сайт»). Используя Сайт, вы соглашаетесь с условиями 
                настоящей Политики конфиденциальности.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>2. Собираемая информация</h2>
              <p>Мы можем собирать следующую информацию:</p>
              <ul>
                <li>Технические данные (IP-адрес, тип браузера, операционная система)</li>
                <li>Данные об использовании Сайта (время посещения, просмотренные страницы)</li>
                <li>Информация, предоставленная вами при регистрации или использовании игровых функций</li>
                <li>Данные для обработки платежей (при совершении покупок в игровом магазине)</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>3. Использование информации</h2>
              <p>Собранная информация используется для:</p>
              <ul>
                <li>Предоставления и улучшения игровых услуг</li>
                <li>Обработки платежей и управления аккаунтами</li>
                <li>Обеспечения безопасности и предотвращения мошенничества</li>
                <li>Отправки важных уведомлений об изменениях в игре</li>
                <li>Анализа использования Сайта для улучшения пользовательского опыта</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>4. Защита данных</h2>
              <p>
                Мы применяем современные методы защиты информации, включая шифрование данных, 
                использование защищенных соединений (HTTPS) и ограничение доступа к персональным данным. 
                Однако ни один метод передачи данных через Интернет не является абсолютно безопасным.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>5. Передача данных третьим лицам</h2>
              <p>
                Мы не продаем и не передаем ваши персональные данные третьим лицам, за исключением случаев:
              </p>
              <ul>
                <li>Когда это необходимо для предоставления услуг (например, платежные системы)</li>
                <li>Когда это требуется по закону или по запросу государственных органов</li>
                <li>С вашего явного согласия</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>6. Cookies и аналогичные технологии</h2>
              <p>
                Сайт использует cookies и аналогичные технологии для улучшения работы Сайта, 
                персонализации контента и анализа трафика. Вы можете настроить свой браузер 
                для отказа от cookies, однако это может повлиять на функциональность Сайта.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>7. Права пользователей</h2>
              <p>Вы имеете право:</p>
              <ul>
                <li>Получать информацию о ваших персональных данных</li>
                <li>Требовать исправления неточных данных</li>
                <li>Требовать удаления ваших персональных данных</li>
                <li>Отозвать согласие на обработку данных</li>
                <li>Подать жалобу в уполномоченный орган по защите данных</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>8. Возрастные ограничения</h2>
              <p>
                Сайт предназначен для пользователей старше 6 лет. Мы не собираем намеренно 
                персональные данные от детей младше 13 лет без согласия родителей или опекунов.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>9. Изменения в Политике конфиденциальности</h2>
              <p>
                Мы оставляем за собой право вносить изменения в настоящую Политику конфиденциальности. 
                О существенных изменениях мы уведомим пользователей через Сайт или по электронной почте.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>10. Контакты</h2>
              <p>
                По вопросам, связанным с обработкой персональных данных, вы можете обращаться 
                по адресу электронной почты: <a href="mailto:privacy@mytanks.com" className={styles.link}>privacy@mytanks.com</a>
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerRating}>
            <span>Rated 6+</span>
          </div>
          <div className={styles.footerCopyright}>
            © «MyTanks» 2021-2026
          </div>
          <div className={styles.footerLinks}>
            <a href="/rules" className={styles.footerLink}>Правила игры</a>
            <a href="/terms" className={styles.footerLink}>Пользовательское соглашение</a>
            <a href="/privacy" className={styles.footerLink}>Политика конфиденциальности</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
