# Достижения в области биологии в XXI веке
Алейкин Сергей, ВШЭ, ФКН, ПМИ 161

Вопреки распространённому мнению, что всё что можно открыть, уже открыто, биология - активно
развивающаяся наука. Еженедельно описываются новые виды, в цепочке ДНК обретают смысл новые
фрагменты, изобретаются все более и более эффективные способы лечения и профилактики.

Но вместе с
тем все открытия и успехи в таких жизненно важных обастях, как медицина или анатомия, часто сводятся
на нет в целых странах или даже во всём мире из-за предрассудков и устаревшего видения мира. Так,
[исследование](https://infogram.com/izmerenie_nauchnoi_gramotnosti_rossiyan_2014) 2014-го года показало,
что всего лишь 33% россиян уверены в том, что гены несут в себе все живые существа, а не только
генетически модифицированные. Это свидетельствует о необразованности в понимании собственной
природы, что зставляет принимать на веру разные псевдонаучные утверждения.

Этот проект призван рассказать о развитии биологии в последние несколько лет, заинтересовать
читателя в дальнейшем изучении предмета (ведь отсутствие знаний может привести к серьёзной угрозе
здоровью), а также понять, насколько распространены псевдонаучные суждения в разных странах.

* Черновые графики в [тетрадке](/data-crawling/who-data.ipynb)
* Красивая статья на [сайте](https://derrior.github.io/data-journalism)

## Вопросы, на которые предстоит найти ответы

* Новые виды
    * В каких странах обнаруживают наибольшее количество новых видов?
    * В каких странах обнаруживают наибольшее количество новых видов организмов из каждого царства?
    * Учёные из каких стран описали большее количество новых видов?
* Медицина
    * Как изменилась смертность и заболеваемость за последние десять лет?
    * Какие страны лидируют по относительной заболеваемости по каждой из категорий заболеваний?
        1. Психические расстройства
        2. Онкологические заболевания
        3. Вирус имуннодефицита
    * Каковы качество финасирования и изменение финансирования за последние 10 лет по разным
      странам в области медицины?
* Исследования в различных областях
    * Как меняется общее количество научных публикаций в различных областях биологии в течение последнего
      десятилетия?
        1. Молекулярная биология и генетика
        2. Физиология
        3. Психология
    * В каких странах самое высокое финансирование исследований в области биологии?
* Популяризация
    * Как изменилась образованность населения в области биологии за последние 10 лет в разных
      странах?
    * Как меняется тираж научно-просветительской литературы во всём мире и в переводах на разные
      языки?
        1. Английский
        2. Русский
        3. Французский
        4. Немецкий
        5. Испанский
* Экология
    * Как меняется уровень использования "чистого" электричества во всём мире по годам и по времени
      года?
    * Как изменилось общее количество выбросов метана за последние 10 лет?
    * Какие источники газа в разные года оказывали наибольшее влияние?


## Используемые источники

* Систематика
    * itis.gov
    * catalogueoflife.org dataset
* Медицина
    * who.int
* Исследования
    * Публикации - scimagojr.com
    * Финансирование - oecd.org, data.worldbank.org
* Экология
    * data.worldbank.org

# Проведённый анализ

## Сравнение уровня заболеваемости в разных странах

Для анализа мною был выбран показатель Всемрной Организации Здравоохранения YLD - Years Lost due to Disability. В статистике заболеваемости ВОЗ есть 3 показателя, и один есть сумма двух других: ```DALY (Disability Adjusted Life Year) = YLL (Years of Life Lost) + YLD ```
Выбор обусловлен тем, что второй из показателей рассчитывается из возраста умерших от той или иной болезни и тем самым будет неточным в странах с малым средним возрастом смерти.

Для начала я посмотрел на две страны, в каждой из которых живёт более миллиарда человек: Китай и Индия. На графике становится видно, что в Индии население страдает в 3-4 раза сильнее от заразных заболеваний, а также связанных с материальным благополучием. В отличие от этого рейтинг заболеваемости не передающимися заболеваниями в странах примерно равный.

Были получены ответы на то, в каких странах хуже всего дела обстоят с злокачественными новообразованиями (экономически благополучные Западные страны, в основном, а также Барбадос), психическими расстройствами (много стран Восточной Европы)

Я сделал попытку соотнести уровень гос. затрат на медицину и заболеваемость, но видимо, не учитывая географический и экономический фактор, связь найти не удастся.

Посмотрел на страны, с наибольшей разницей вложений в медицину между 2006 и 2014. Среди тех, у кого
бюджет медицины стал гораздо меньше, особенно выделилось островное государство Niue, финансирование
на человека упало в 8 раз. В тетрадке приведено возможное объяснение.

Посмотрел на страны, в которых сильно изменилась смертность. Сильнее всего меняется в Латинской и
Центральной Америках, причём в обе стороны.

Ради интереса я посмотрел соотношение количества людей и количества заболевших инфекционными/паразитическими заболеваниями. в принципе, распределение должно быть вокруг прямой -- чем больше людей, тем больше болеющих. Но на графике выделились две страны, в которых болеющих гораздо больше, чем в других странах с примерно тем же населением. Это оказались Демократическая Республика Конго и Нигерия, видимо, там эпидемии и антисанитария.

По поводу научных исследований -- количество статей по генетике, молекулярной биологии и психологии довольно быстро растёт, а по физиологии остаётся примерно на одном уровне в течение 10 лет. Была более детально рассмотрена генетика как предмет исследования в разных странах. Исследователи из США стабильно держались на 1-м месте по количеству цитируемых документов (я рассматривал именно цитируемые статьи, ведь цитируемость значит полезность исследования для научного сообщества), но с 2012 года количество исследований стало падать довольно быстро. В то время, как исследователи из Швеции и Китая всё более и более активны в этой области, и не исключено, скоро именно Китай станет центром мировой генетики.

