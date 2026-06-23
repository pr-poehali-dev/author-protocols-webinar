import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Oferta = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-5 py-16">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-8 text-muted-foreground hover:text-foreground -ml-2"
        >
          <Icon name="ArrowLeft" size={16} className="mr-2" />
          На главную
        </Button>

        <h1 className="font-display text-3xl sm:text-4xl font-bold mb-2">Публичная оферта</h1>
        <p className="text-muted-foreground mb-10">на оказание информационно-консультационных услуг</p>

        <div className="prose prose-invert max-w-none space-y-8 text-foreground/85 leading-relaxed">

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">1. Общие положения</h2>
            <p>
              Настоящий документ является публичной офертой индивидуального предпринимателя
              Габуевой Элоны Тельмановны (ИНН 151606111555, ОГРН 318774600614428,
              далее — «Исполнитель») и содержит все существенные условия договора на оказание
              информационно-консультационных услуг в форме онлайн-вебинара.
            </p>
            <p className="mt-3">
              Акцептом настоящей оферты является оплата услуг Исполнителя. С момента
              поступления оплаты договор считается заключённым на условиях, изложенных ниже.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">2. Предмет договора</h2>
            <p>
              Исполнитель оказывает Заказчику информационно-консультационные услуги в формате
              онлайн-вебинара на тему: <strong>«Дуэль или Дуэт? Полимолочная кислота и
              гидроксиапатит кальция: клинические сценарии»</strong>.
            </p>
            <p className="mt-3">В рамках услуги Заказчик получает:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Доступ к прямому эфиру вебинара;</li>
              <li>Запись вебинара (доступна после окончания трансляции);</li>
              <li>PDF-материал «Сравнительная таблица ПМК и ГА: глубины, дозировки, сроки».</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">3. Стоимость и порядок оплаты</h2>
            <p>
              Стоимость услуг составляет <strong>15 000 (пятнадцать тысяч) рублей</strong>,
              включая НДС (если применимо).
            </p>
            <p className="mt-3">
              Оплата производится безналичным способом через платёжный сервис ЮКасса.
              Обязательство по оплате считается исполненным с момента зачисления денежных
              средств на расчётный счёт Исполнителя.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">4. Права и обязанности сторон</h2>
            <p className="font-medium text-foreground">Исполнитель обязуется:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Предоставить доступ к вебинару в указанные сроки;</li>
              <li>Направить ссылку на запись и PDF-материалы на email Заказчика в течение 24 часов после проведения вебинара;</li>
              <li>Обеспечить надлежащее качество предоставляемых материалов.</li>
            </ul>
            <p className="font-medium text-foreground mt-4">Заказчик обязуется:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Оплатить услуги в размере и порядке, установленном настоящей офертой;</li>
              <li>Не передавать доступ к вебинару третьим лицам;</li>
              <li>Не записывать, не копировать и не распространять материалы вебинара без письменного согласия Исполнителя.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">5. Порядок возврата денежных средств</h2>
            <p>
              Заказчик вправе отказаться от услуг и потребовать возврата уплаченных средств
              до момента начала вебинара. Возврат осуществляется в течение 10 рабочих дней
              с момента получения письменного обращения на электронную почту Исполнителя.
            </p>
            <p className="mt-3">
              После начала вебинара или предоставления доступа к записи возврат денежных
              средств не производится, если услуга была фактически оказана в полном объёме.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">6. Интеллектуальная собственность</h2>
            <p>
              Все материалы вебинара (видеозапись, презентация, PDF-файлы) являются
              интеллектуальной собственностью Исполнителя. Заказчик получает право
              на личное использование материалов без права передачи третьим лицам,
              публикации и коммерческого использования.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">7. Ответственность сторон</h2>
            <p>
              Исполнитель не несёт ответственности за невозможность оказания услуг
              вследствие обстоятельств непреодолимой силы (форс-мажор). В случае
              технических неполадок, препятствующих проведению вебинара в установленное
              время, Исполнитель обязуется перенести вебинар или предоставить запись
              в согласованные сроки.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">8. Персональные данные</h2>
            <p>
              Оплачивая услуги, Заказчик даёт согласие на обработку своих персональных данных
              (имя, email, номер телефона) в целях исполнения настоящего договора и направления
              информационных сообщений о мероприятиях Исполнителя. Данные не передаются
              третьим лицам, за исключением платёжного сервиса, необходимого для проведения оплаты.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">9. Реквизиты Исполнителя</h2>
            <div className="space-y-1">
              <p><strong>ИП Габуева Элона Тельмановна</strong></p>
              <p>ИНН: 151606111555</p>
              <p>ОГРН: 318774600614428</p>
            </div>
          </section>

        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center">
          <Button
            onClick={() => navigate('/')}
            className="gold-gradient text-primary-foreground font-semibold px-8 py-5 rounded-xl gold-glow hover:opacity-90 transition-opacity"
          >
            Вернуться на страницу вебинара
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Oferta;
