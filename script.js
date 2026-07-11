// Data Storage
const posData = [
  { id: 'n', title: 'Danh từ', eng: 'Noun', sym: 'N', meaning: 'Nền tảng của mọi câu — gọi tên người, sự vật, hiện tượng, địa điểm hoặc khái niệm trừu tượng.', color: 'sky' },
  { id: 'v', title: 'Động từ', eng: 'Verb', sym: 'V', meaning: '"Trái tim" của câu — diễn tả hành động, trạng thái hoặc quá trình của chủ ngữ.', color: 'rose' },
  { id: 'adj', title: 'Tính từ', eng: 'Adjective', sym: 'Adj', meaning: '"Tô màu" cho câu — miêu tả tính chất, đặc điểm hoặc trạng thái của danh từ và đại từ.', color: 'violet' },
  { id: 'adv', title: 'Trạng từ', eng: 'Adverb', sym: 'Adv', meaning: 'Làm rõ nghĩa cho động từ, tính từ, trạng từ khác — hoặc cả câu — về cách thức, thời gian, mức độ.', color: 'emerald' },
  { id: 'pron', title: 'Đại từ', eng: 'Pronoun', sym: 'Pron', meaning: 'Thay thế cho danh từ đã nhắc đến trước đó, giúp câu bớt lặp từ và trôi chảy hơn.', color: 'yellow' },
  { id: 'prep', title: 'Giới từ', eng: 'Preposition', sym: 'Prep', meaning: '"Cây cầu nối" chỉ quan hệ thời gian, không gian, phương hướng giữa các thành phần trong câu.', color: 'pink' },
  { id: 'conj', title: 'Liên từ', eng: 'Conjunction', sym: 'Conj', meaning: '"Chất keo dính" nối từ, cụm từ hoặc mệnh đề để thể hiện quan hệ logic trong câu.', color: 'indigo' },
  { id: 'int', title: 'Thán từ', eng: 'Interjection', sym: 'Int', meaning: '"Gia vị" cảm xúc của câu — bộc lộ cảm xúc đột ngột như ngạc nhiên, vui mừng hay đau đớn.', color: 'slate' },
  { id: 'det', title: 'Hạn định từ', eng: 'Determiner', sym: 'Det', meaning: '"Biển báo giao thông" đứng trước danh từ — xác định đối tượng, số lượng hoặc quyền sở hữu.', color: 'amber' }
];

const posBodies = {
  n: `Danh từ (Noun - thường được ký hiệu là **N** hoặc **n**) là nền tảng của mọi câu trong tiếng Anh. Chúng được dùng để gọi tên con người, sự vật, hiện tượng, địa điểm hoặc các khái niệm trừu tượng.

**1. Chức năng và Vị trí trong câu**

Danh từ có thể đứng ở nhiều vị trí khác nhau để đảm nhiệm các vai trò ngữ pháp:

* **Làm Chủ ngữ (Subject):** Đứng đầu câu, trước động từ.
  + *Ví dụ:* **The cat** is sleeping.
* **Làm Tân ngữ trực tiếp/gián tiếp (Object):** Đứng sau động từ hành động.
  + *Ví dụ:* She bought **a book**.
* **Làm Bổ ngữ cho Chủ ngữ (Complement):** Đứng sau động từ to be hoặc linking verbs (become, seem, feel...).
  + *Ví dụ:* He is **a teacher**.
* **Làm Tân ngữ cho Giới từ:** Đứng ngay sau các giới từ (in, on, at, about...).
  + *Ví dụ:* I am interested in **music**.

**2. Phân loại Danh từ**

Việc phân loại giúp bạn biết cách sử dụng mạo từ (a/an/the) và chia động từ cho chính xác.

| **Loại Danh từ** | **Đặc điểm** | **Ví dụ** |
| --- | --- | --- |
| **Danh từ chung** | Chỉ sự vật, hiện tượng chung chung | dog, city, table |
| **Danh từ riêng** | Tên riêng cụ thể (luôn viết hoa) | London, Mary, Google |
| **Đếm được** | Có thể đếm bằng số (có dạng số ít/nhiều) | one apple, two cars |
| **Không đếm được** | Không đếm trực tiếp bằng số (chất lỏng, trừu tượng) | water, money, information |
| **Cụ thể** | Những thứ có thể cầm, nắm, nhìn, sờ thấy | house, tree, phone |
| **Trừu tượng** | Khái niệm, cảm xúc, trạng thái (không sờ thấy) | love, happiness, time |
| **Tập hợp** | Chỉ một nhóm người, vật | family, team, army |
| **Danh từ ghép** | Cấu tạo từ 2 hoặc nhiều từ ghép lại | toothbrush, blackboard |

**3. Dấu hiệu nhận biết (Hậu tố phổ biến)**

Khi làm bài tập từ loại hoặc đọc hiểu, bạn có thể dễ dàng nhận ra danh từ dựa vào phần đuôi (hậu tố) của từ:

| **Hậu tố (Suffix)** | **Ý nghĩa thường gặp** | **Ví dụ** |
| --- | --- | --- |
| **-tion / -sion** | Sự việc, hành động | information, decision |
| **-ment** | Sự việc, trạng thái | development, agreement |
| **-ness** | Trạng thái, tính chất | happiness, sadness |
| **-ity / -ty** | Tính chất, tình trạng | ability, activity |
| **-er / -or** | Người làm nghề / Thiết bị | teacher, doctor, actor |
| **-ist** | Người chuyên môn | scientist, artist |
| **-ance / -ence** | Trạng thái, mức độ | importance, difference |
| **-ship** | Mối quan hệ, tình trạng | friendship, leadership |

**4. Quy tắc chuyển sang số nhiều**

Với danh từ đếm được, khi chuyển từ số ít (Singular) sang số nhiều (Plural), ta tuân theo các quy tắc sau:

1. **Thêm "s" vào hầu hết các danh từ:** car -> cars, book -> books.
2. **Thêm "es"** khi từ tận cùng là **-ch, -sh, -s, -x, -z, -o**:
   * watch -> watches, box -> boxes, tomato -> tomatoes.
3. **Đuôi "y":**
   * Nếu trước "y" là phụ âm: Đổi "y" thành "i" rồi thêm "es" (baby -> babies).
   * Nếu trước "y" là nguyên âm (u, e, o, a, i): Chỉ thêm "s" (boy -> boys).
4. **Đuôi "f" hoặc "fe":** Thường đổi thành "ves" (leaf -> leaves, knife -> knives).
   * *Ngoại lệ:* roof -> roofs, chef -> chefs.
5. **Bất quy tắc (Phải học thuộc):**
   * man -> men
   * woman -> women
   * child -> children
   * person -> people
   * foot -> feet
   * tooth -> teeth
   * mouse -> mice
   * sheep -> sheep (không đổi)

**Lưu ý quan trọng:** Danh từ không đếm được (như *furniture, advice, news, luggage*) luôn ở dạng số ít và không bao giờ thêm "s" hay dùng với mạo từ "a/an".`,
  v: `Động từ (Verb - thường được ký hiệu là **V** hoặc **v**) được ví như "trái tim" của câu. Không có động từ, một chuỗi từ vựng sẽ không thể tạo thành một câu hoàn chỉnh mang ý nghĩa. Nó dùng để diễn tả hành động, trạng thái hoặc quá trình của chủ ngữ.

**1. Vị trí trong câu**

Vị trí của động từ khá cố định để đảm bảo cấu trúc ngữ pháp:

* **Đứng ngay sau Chủ ngữ (Subject + Verb):** Đây là vị trí phổ biến nhất.
  + *Ví dụ:* He **runs** every morning.
* **Đứng trước Tân ngữ (Verb + Object):** Nếu đó là động từ tác động lên một đối tượng khác.
  + *Ví dụ:* She **drinks** coffee.
* **Đứng trước Tính từ (Linking Verb + Adjective):** Đối với các động từ nối.
  + *Ví dụ:* The soup **tastes** delicious.

**2. Phân loại Động từ**

Động từ trong tiếng Anh rất đa dạng, nhưng có thể chia thành 4 nhóm chính để dễ kiểm soát khi làm bài tập ngữ pháp và đọc hiểu:

| **Loại Động từ** | **Chức năng & Đặc điểm** | **Ví dụ** |
| --- | --- | --- |
| **Động từ chỉ hành động (Action/Dynamic Verbs)** | Diễn tả hành động vật lý hoặc nhận thức có thể thấy/cảm nhận. | run, eat, think, write |
| **Động từ nối (Linking Verbs)** | Không chỉ hành động mà dùng để nối Chủ ngữ với từ mô tả (Tính từ/Danh từ). | be, seem, become, feel, look, taste |
| **Trợ động từ (Auxiliary Verbs)** | "Hỗ trợ" động từ chính để tạo thành các thì, câu phủ định hoặc câu hỏi. | be (is/are...), do/does, have/has |
| **Động từ khuyết thiếu (Modal Verbs)** | Diễn tả khả năng, sự cho phép, nghĩa vụ. Luôn đi kèm V-nguyên thể. | can, could, will, would, should, must, may |

**Nội động từ (Intransitive) và Ngoại động từ (Transitive)**

Trong các dạng bài tập điền từ vào đoạn văn, việc phân biệt hai loại này là một kỹ năng cực kỳ hữu ích giúp bạn loại trừ đáp án nhanh chóng:

* **Ngoại động từ (Transitive Verbs):** Là động từ BẮT BUỘC phải có một Tân ngữ (thường là danh từ) theo sau để hoàn thiện nghĩa.
  + *Ví dụ:* I **bought** a new car. (Không thể nói "I bought" rồi dừng lại).
* **Nội động từ (Intransitive Verbs):** Là động từ KHÔNG CẦN Tân ngữ theo sau, bản thân nó đã đủ nghĩa.
  + *Ví dụ:* The baby **is sleeping**. (Không có vật gì bị tác động).

**3. Các dạng của Động từ (Verb Forms)**

Tùy thuộc vào "Thì" (Tense) và cấu trúc câu, một động từ tiếng Anh thường biến đổi qua 5 dạng cơ bản sau:

1. **V-inf (Nguyên thể không "to"):** Dạng gốc, dùng sau động từ khuyết thiếu hoặc trong một số cấu trúc đặc biệt. (vd: *go, work*)
2. **To-V (Nguyên thể có "to"):** Dùng làm chủ ngữ, tân ngữ hoặc chỉ mục đích. (vd: *to go, to work*)
3. **V-s/es:** Động từ chia ở thì Hiện tại đơn với chủ ngữ ngôi thứ 3 số ít. (vd: *goes, works*)
4. **V-ing (Hiện tại phân từ / Danh động từ):** Dùng trong các thì tiếp diễn hoặc biến động từ thành danh từ. (vd: *going, working*)
5. **V-ed / V2 / V3 (Quá khứ & Quá khứ phân từ):** Dùng trong thì Quá khứ, các thì Hoàn thành hoặc câu bị động. Động từ có quy tắc thêm "-ed" (*worked*), bất quy tắc phải học thuộc (*went, gone*).

**4. Dấu hiệu nhận biết (Hậu tố phổ biến)**

Tương tự như danh từ, bạn có thể đoán nghĩa và loại từ dựa vào đuôi (hậu tố) cấu tạo nên động từ đó:

| **Hậu tố (Suffix)** | **Ví dụ** | **Ý nghĩa / Cách dịch** |
| --- | --- | --- |
| **-ize / -ise** | organize, realize | Tổ chức, nhận ra |
| **-ate** | create, evaluate | Tạo ra, đánh giá |
| **-en** | widen, strengthen | Làm rộng ra, củng cố |
| **-ify** | simplify, identify | Đơn giản hóa, nhận dạng |`,
  adj: `Tính từ (Adjective - thường được ký hiệu là **Adj** hoặc **a**) đóng vai trò "tô màu" cho câu. Chức năng cốt lõi của tính từ là cung cấp thêm thông tin, miêu tả tính chất, đặc điểm hoặc trạng thái cho Danh từ hoặc Đại từ.

**1. Vị trí trong câu (Điểm mấu chốt để điền từ)**

Trong các bài thi đọc hiểu hoặc điền từ vào đoạn văn (như dạng bài Part 6), việc ghi nhớ vị trí của tính từ sẽ giúp bạn ngay lập tức phân tích được cấu trúc và xác định từ loại cần điền:

* **Đứng trước Danh từ (Attributive):** Bổ nghĩa trực tiếp cho danh từ đó.
  + *Ví dụ:* a **compact** keyboard (một chiếc bàn phím nhỏ gọn), a **scalable** system (một hệ thống có khả năng mở rộng).
* **Đứng sau Động từ nối (Linking Verbs):** Các động từ như *be, seem, look, remain, become, feel*.
  + *Ví dụ:* The database server remains **stable**. (Máy chủ cơ sở dữ liệu vẫn duy trì trạng thái ổn định).
* **Đứng sau Đại từ bất định:** Bổ nghĩa cho *something, someone, nothing, anything, everything...*
  + *Ví dụ:* Let's build something **innovative**.
* **Cấu trúc Tân ngữ đặc biệt:** Dùng sau các động từ *make, keep, find, leave* + Tân ngữ.
  + *Ví dụ:* The automation script makes the synchronization process **efficient**. (Kịch bản tự động hóa làm cho quá trình đồng bộ trở nên hiệu quả).

**2. Phân biệt Tính từ đuôi "-ing" và "-ed"**

Đây là bẫy kinh điển và xuất hiện với tần suất dày đặc trong các bài kiểm tra ngôn ngữ:

* **Tính từ đuôi "-ing" (Chủ động):** Dùng để miêu tả **bản chất, đặc điểm** của sự vật/sự việc; là thứ GÂY RA cảm giác cho người hoặc vật khác.
  + *Ví dụ:* The error logs are **confusing**. (Những bản ghi lỗi này thật rắc rối/gây bối rối).
* **Tính từ đuôi "-ed" (Bị động):** Dùng để miêu tả **cảm xúc, trạng thái** của một người (hoặc con vật) khi BỊ TÁC ĐỘNG bởi một sự vật/sự việc.
  + *Ví dụ:* The engineer was **confused** by the error logs. (Kỹ sư cảm thấy bối rối bởi những bản ghi lỗi).

**3. Trật tự tính từ trước danh từ (Quy tắc OSASCOMP)**

Khi có nhiều tính từ cùng đứng trước bổ nghĩa cho một danh từ, bạn không thể sắp xếp chúng ngẫu nhiên mà phải tuân theo thứ tự ưu tiên sau:

1. **O** - Opinion (Quan điểm, đánh giá): beautiful, ugly, excellent...
2. **S** - Size (Kích cỡ): big, small, heavy...
3. **A** - Age (Tuổi tác/Độ mới): new, old, young...
4. **S** - Shape (Hình dáng): round, square, flat...
5. **C** - Color (Màu sắc): black, white, red...
6. **O** - Origin (Nguồn gốc): Japanese, Vietnamese, American...
7. **M** - Material (Chất liệu): wooden, plastic, metal...
8. **P** - Purpose (Mục đích, thường là danh từ dạng V-ing): sleeping (bag), running (shoes)...

*Ví dụ:* Một chiếc bàn phím cơ bằng nhựa, màu trắng, nhỏ gọn, tuyệt đẹp.

-> A **beautiful compact white plastic mechanical** keyboard. *(Opinion -> Size -> Color -> Material -> Purpose)*

**4. Dấu hiệu nhận biết (Hậu tố cấu tạo Tính từ)**

Giống như danh từ, việc ghi nhớ các hậu tố (Suffix) sau đây giúp bạn dễ dàng xác định được họ từ (word family) trong các bài tập trắc nghiệm:

| **Hậu tố (Suffix)** | **Ý nghĩa / Chức năng** | **Ví dụ** |
| --- | --- | --- |
| **-ful** | Đầy tính chất gì đó | useful (hữu ích), successful (thành công) |
| **-less** | Không có (ngược với -ful) | useless (vô ích), wireless (không dây) |
| **-able / -ible** | Có khả năng làm gì | flexible (linh hoạt), accessible (có thể truy cập) |
| **-ous / -ious** | Có tính chất | continuous (liên tục), dangerous (nguy hiểm) |
| **-ive** | Bản chất, xu hướng | active (chủ động), effective (hiệu quả) |
| **-al** | Thuộc về cái gì đó | logical (hợp lý), technical (thuộc kỹ thuật) |
| **-ic** | Liên quan đến | specific (cụ thể), economic (thuộc kinh tế) |
| **-y** | Chứa nhiều (biến N thành Adj) | risky (rủi ro), rainy (có mưa) |

**5. Các cấp độ So sánh (Degrees of Comparison)**

Tính từ thay đổi hình thức khi được dùng để đối chiếu các đối tượng với nhau:

1. **So sánh bằng:** Bám sát cấu trúc as + Adj + as.
   * *Ví dụ:* Java is **as popular as** C++.
2. **So sánh hơn:**
   * Tính từ ngắn (1 âm tiết): Thêm **-er** (faster, harder).
   * Tính từ dài (từ 2 âm tiết trở lên): Thêm **more** phía trước (more reliable, more complex).
3. **So sánh nhất:**
   * Tính từ ngắn: Thêm **the** phía trước và đuôi **-est** (the fastest).
   * Tính từ dài: Thêm **the most** phía trước (the most efficient).

*(Lưu ý có các trường hợp bất quy tắc bắt buộc phải nhớ như: good -> better -> the best; bad -> worse -> the worst).*`,
  adv: `Trạng từ (Adverb - thường được ký hiệu là **Adv**) là từ loại dùng để bổ nghĩa, cung cấp thêm thông tin chi tiết về cách thức, thời gian, địa điểm, hoặc mức độ. Nếu tính từ dùng để miêu tả cho Danh từ, thì trạng từ chính là công cụ để làm rõ nghĩa cho **Động từ, Tính từ, một Trạng từ khác, hoặc thậm chí là cả một câu trọn vẹn**.

**1. Vị trí và Chức năng bổ nghĩa**

Tùy vào việc trạng từ bổ nghĩa cho từ loại nào, nó sẽ có vị trí đứng tương ứng trong câu:

* **Bổ nghĩa cho Động từ (Verb):** Thường đứng ngay sau động từ thường, hoặc sau tân ngữ (nếu có). Trạng từ này trả lời cho câu hỏi "Hành động đó diễn ra như thế nào?".
  + *Ví dụ:* He drives **carefully**. (Anh ấy lái xe một cách cẩn thận).
  + *Ví dụ:* She speaks English **fluently**. (Cô ấy nói tiếng Anh một cách trôi chảy).
* **Bổ nghĩa cho Tính từ (Adjective):** Luôn đứng ngay trước tính từ để nhấn mạnh mức độ.
  + *Ví dụ:* The task is **extremely** difficult. (Nhiệm vụ này cực kỳ khó khăn).
* **Bổ nghĩa cho Trạng từ khác (Adverb):** Đứng trước trạng từ mà nó muốn bổ nghĩa.
  + *Ví dụ:* He completed the work **very** quickly. (Anh ấy hoàn thành công việc rất nhanh).
* **Bổ nghĩa cho cả câu:** Thường đứng ở đầu câu và được ngăn cách với mệnh đề chính bằng dấu phẩy.
  + *Ví dụ:* **Fortunately**, we finished the project on time. (Thật may mắn, chúng tôi đã hoàn thành dự án đúng hạn).

**2. Phân loại Trạng từ**

Việc phân loại giúp bạn xác định đúng trật tự của chúng khi có nhiều trạng từ cùng xuất hiện trong một câu.

| **Loại Trạng từ** | **Chức năng** | **Ví dụ phổ biến** |
| --- | --- | --- |
| **Thể cách (Manner)** | Diễn tả cách hành động diễn ra (How?) | quickly, carefully, well, easily |
| **Thời gian (Time)** | Diễn tả thời điểm hành động xảy ra (When?) | yesterday, today, now, recently |
| **Nơi chốn (Place)** | Diễn tả không gian hành động (Where?) | here, there, everywhere, outside |
| **Tần suất (Frequency)** | Mức độ lặp lại của hành động (How often?) | always, usually, often, rarely, never |
| **Mức độ (Degree)** | Nhấn mạnh tính chất hoặc mức độ | very, quite, extremely, completely |

**Lưu ý vị trí của Trạng từ chỉ tần suất:** Chúng thường đứng *trước* động từ thường (He **always** goes to work early) nhưng đứng *sau* động từ to be (He is **always** early).

**3. Cách cấu tạo và Dấu hiệu nhận biết**

Phần lớn trạng từ chỉ thể cách được cấu tạo bằng cách thêm đuôi **"-ly"** vào sau một tính từ:

Tính từ (Adj) + "ly" = Trạng từ (Adv)

* quick -> quick**ly**
* clear -> clear**ly**
* successful -> successful**ly**

**Các trường hợp ngoại lệ cực kỳ quan trọng (Hay gặp trong bài thi):**

**1. Tính từ và Trạng từ có hình thức giống hệt nhau (Không thêm "-ly"):**

* fast (nhanh) -> fast (vẫn là fast, không có "fastly")
* hard (chăm chỉ/cứng) -> hard
* late (muộn) -> late
* early (sớm) -> early
* high (cao) -> high

**2. Trạng từ bất quy tắc:**

* good (tốt) -> **well**

**3. Bẫy đuôi "-ly" nhưng lại là TÍNH TỪ (Không phải trạng từ):**

Một số từ có đuôi "-ly" nhưng bản chất là danh từ thêm "-ly" để biến thành tính từ. Bạn không thể dùng chúng để bổ nghĩa cho động từ.

* friendly (thân thiện)
* lovely (đáng yêu)
* lonely (cô đơn)
* daily/weekly/monthly (hàng ngày/tuần/tháng)

**4. Trật tự của Trạng từ trong câu**

Khi một câu có quá nhiều trạng từ cùng bổ nghĩa cho một động từ, quy tắc sắp xếp tiêu chuẩn là **MPT (Manner - Place - Time)**:

**Cách thức (Manner) -> Nơi chốn (Place) -> Thời gian (Time)**

*Ví dụ:*

He worked **hard** (Cách thức) **at the office** (Nơi chốn) **yesterday** (Thời gian).`,
  pron: `Đại từ (Pronoun - thường được ký hiệu là **Pron**) là từ dùng để **thay thế cho một danh từ hoặc cụm danh từ** đã được nhắc đến trước đó. Mục đích chính của đại từ là giúp câu văn bớt lặp từ, trở nên tự nhiên và trôi chảy hơn.

**1. Bảng phân loại Đại từ cốt lõi**

Khi làm bài tập trắc nghiệm, bạn cần nhìn vị trí của khoảng trống để chọn đúng "cột" trong bảng này:

| **Ngôi (Person)** | **Chủ ngữ (Subject)** | **Tân ngữ (Object)** | **Tính từ sở hữu (Possessive Adj)\\*** | **Đại từ sở hữu (Possessive Pron)** | **Đại từ phản thân (Reflexive)** |
| --- | --- | --- | --- | --- | --- |
| **Thứ 1 (số ít)** | I | me | my | mine | myself |
| **Thứ 1 (số nhiều)** | we | us | our | ours | ourselves |
| **Thứ 2 (ít/nhiều)** | you | you | your | yours | yourself / yourselves |
| **Thứ 3 (nam)** | he | him | his | his | himself |
| **Thứ 3 (nữ)** | she | her | her | hers | herself |
| **Thứ 3 (vật)** | it | it | its | (hiếm dùng) | itself |
| **Thứ 3 (số nhiều)** | they | them | their | theirs | themselves |

*\\*Lưu ý: "Tính từ sở hữu" bản chất là tính từ, nhưng luôn được học kèm trong bảng đại từ vì chúng có chung gốc từ.*

**2. Cách dùng và Dấu hiệu nhận biết từng loại**

**Đại từ nhân xưng (Subject & Object Pronouns)**

* **Chủ ngữ (I, he, she, we, they...):** Luôn đứng đầu câu hoặc đầu mệnh đề, **trước Động từ**.
  + *Ví dụ:* **They** upgraded the database last night.
* **Tân ngữ (me, him, her, us, them...):** Luôn đứng **sau Động từ** hoặc **sau Giới từ** (in, on, at, for, with...).
  + *Ví dụ:* The manager gave **them** a new project. (Sau động từ).
  + *Ví dụ:* This documentation is for **him**. (Sau giới từ).

**Phân biệt: Tính từ sở hữu vs. Đại từ sở hữu**

Đây là bẫy kinh điển trong bài thi điền từ:

* **Tính từ sở hữu (my, your, his, her, their...):** BẮT BUỘC phải có một Danh từ đứng ngay phía sau.
  + *Ví dụ:* This is **my laptop**.
* **Đại từ sở hữu (mine, yours, his, hers, theirs...):** Đứng MỘT MÌNH, không bao giờ có danh từ theo sau. Bản thân nó đã bao gồm "Tính từ sở hữu + Danh từ".
  + *Ví dụ:* Your laptop is new. **Mine** is old. *(Mine = my laptop).*

**Đại từ phản thân (Reflexive Pronouns)**

Dùng trong hai trường hợp chính:

1. **Chủ ngữ và Tân ngữ là một người/vật:**
   * *Ví dụ:* The script will execute **itself**. (Kịch bản tự động chạy chính nó).
2. **Nhấn mạnh sự tự lực (thường đi với "by"):**
   * *Ví dụ:* I wrote this code **by myself**. (Tự tôi viết đoạn code này, không ai giúp cả).

**3. Đại từ Quan hệ (Relative Pronouns)**

Đại từ quan hệ dùng để nối hai mệnh đề, thay thế cho danh từ đứng ngay trước nó. Nhìn vào từ ngay trước khoảng trống để chọn đại từ phù hợp:

* **Who:** Thay thế cho NGƯỜI, làm Chủ ngữ (Sau "who" là Động từ).
* **Whom:** Thay thế cho NGƯỜI, làm Tân ngữ (Sau "whom" là Chủ ngữ + Động từ).
* **Which:** Thay thế cho VẬT, làm Chủ/Tân ngữ.
* **That:** Dùng thay thế cho cả Người và Vật. *(Lưu ý tuyệt đối: Không dùng "that" sau dấu phẩy* , *hoặc sau giới từ).*
* **Whose:** Chỉ sự SỞ HỮU. (Sau "whose" BẮT BUỘC phải là một Danh từ không có mạo từ a/an/the).

*Mẹo phòng thi:* Nếu khoảng trống nằm giữa 2 danh từ (Ví dụ: The engineer \\_\\_\\_\\_\\_ code is excellent), đáp án chắc chắn 100% là **whose**.

**4. Đại từ Bất định (Indefinite Pronouns)**

Dùng để chỉ người hoặc vật không xác định cụ thể: *everyone, someone, anybody, nobody, everything, nothing...*

* **Quy tắc vàng ngữ pháp:** Động từ đi theo sau một Đại từ bất định LUÔN chia ở **ngôi thứ 3 số ít** (Singular verb).
  + *Ví dụ:* **Everyone is** waiting for the system update. *(Không dùng "are").*
  + *Ví dụ:* **Nothing works** perfectly on the first try. *(Thêm "s" vào động từ).*`,
  prep: `Giới từ (Preposition - thường được ký hiệu là **Prep**) là "cây cầu nối" trong tiếng Anh. Chúng không thể đứng một mình mà luôn phải đi kèm với một từ khác để chỉ ra mối quan hệ về **thời gian, không gian, phương hướng** hoặc **nguyên nhân/mục đích** giữa các thành phần trong câu.

**1. Quy tắc cốt lõi (Tuyệt đối không được quên)**

Trong các bài tập điền từ, nếu khoảng trống yêu cầu điền một giới từ, phải nhớ ngay quy tắc sau:

**Theo sau Giới từ LUÔN LUÔN là:**

1. **Một Danh từ / Cụm danh từ:** in **the morning**, at **the office**.
2. **Một Đại từ tân ngữ:** with **him**, for **them**.
3. **Một Động từ thêm "-ing" (Danh động từ):** Thank you for **helping** me. *(Tuyệt đối không dùng V-nguyên thể sau giới từ, ngoại trừ "to" trong cấu trúc To-V).*

**2. Bộ ba "IN - ON - AT"**

Đây là 3 giới từ xuất hiện nhiều nhất và tuân theo nguyên tắc "Phễu ngược" (từ rộng lớn, chung chung thu hẹp dần đến cụ thể, chi tiết):

| **Mức độ** | **Thời gian (Time)** | **Nơi chốn (Place)** |
| --- | --- | --- |
| **IN (Rộng lớn)** | Tháng, Năm, Mùa, Thế kỷ, Buổi trong ngày.    *VD: in 2026, in July, in the summer, in the morning.* | Quốc gia, Thành phố, Không gian bao kín.    *VD: in Vietnam, in Hanoi, in the room, in the box.* |
| **ON (Cụ thể hơn)** | Ngày trong tuần, Ngày tháng cụ thể.    *VD: on Monday, on July 11th, on my birthday.* | Trên bề mặt, Tên đường phố, Phương tiện công cộng.    *VD: on the table, on Wall Street, on the bus.* |
| **AT (Chi tiết nhất)** | Giờ giấc cụ thể, Thời điểm ngắn.    *VD: at 2:54 PM, at noon, at night, at the moment.* | Một điểm đến cụ thể, Địa chỉ chính xác có số nhà.    *VD: at home, at work, at the airport, at 123 Baker St.* |

**3. Giới từ chỉ Sự di chuyển và Phương hướng**

Thường đi kèm với các động từ chỉ sự chuyển động (go, walk, run, drive...):

* **To:** Đi ĐẾN một điểm đích. *(VD: go* ***to*** *the office).*
* **Into / Out of:** Đi VÀO TRONG / Ra KHỎI một không gian kín. *(VD: walk* ***into*** *the server room).*
* **Through:** XUYÊN QUA (từ bên này sang bên kia của một không gian có khối/chiều sâu, như đường hầm, khu rừng). *(VD: drive* ***through*** *the tunnel).*
* **Across:** BĂNG QUA (từ bên này sang bên kia của một bề mặt phẳng, như con đường, dòng sông). *(VD: walk* ***across*** *the street).*
* **Along:** DỌC THEO (đi song song với một đường dài). *(VD: walk* ***along*** *the river).*

**4. Các cụm cố định (Collocations)**

Trong các bài thi chuẩn hóa, người ta thường không kiểm tra giới từ cơ bản mà kiểm tra các **cụm cố định**. Bạn bắt buộc phải học thuộc lòng các cặp từ đi liền với nhau sau đây:

**Động từ + Giới từ (Verb + Prep)**

* **depend ON / rely ON:** phụ thuộc vào
* **apologize FOR:** xin lỗi vì điều gì
* **consist OF:** bao gồm
* **participate IN:** tham gia vào (= take part in)
* **look AT / look FOR / look AFTER:** nhìn vào / tìm kiếm / chăm sóc
* **listen TO:** lắng nghe (Ai đó/cái gì)

**Tính từ + Giới từ (Adjective + Prep)**

* **interested IN:** quan tâm đến
* **responsible FOR:** chịu trách nhiệm về
* **familiar WITH:** quen thuộc với
* **capable OF:** có khả năng làm gì
* **similar TO:** tương tự với
* **aware OF:** nhận thức được

**5. Những "Bẫy" giới từ thường gặp**

Người Việt học tiếng Anh thường mắc lỗi thêm giới từ vào những động từ không cần giới từ (do thói quen dịch word-by-word từ tiếng Việt sang):

* **Discuss something** (Thảo luận về cái gì). *KHÔNG dùng "discuss about".*
* **Contact someone** (Liên hệ với ai đó). *KHÔNG dùng "contact with".*
* **Access something** (Truy cập vào cái gì). *KHÔNG dùng "access into/to" (trừ khi "access" làm danh từ: have access to something).*
* **Emphasize something** (Nhấn mạnh vào cái gì). *KHÔNG dùng "emphasize on".*`,
  conj: `Liên từ (Conjunction - thường được ký hiệu là **Conj**) đóng vai trò như "chất keo dính" trong tiếng Anh. Chúng dùng để liên kết các từ, cụm từ, hoặc các mệnh đề lại với nhau, giúp câu văn thể hiện rõ mối quan hệ logic (nguyên nhân, kết quả, tương phản, bổ sung).

**1. Liên từ kết hợp (Coordinating Conjunctions)**

Nhóm này dùng để nối các từ, cụm từ hoặc mệnh đề có **vai trò ngữ pháp tương đương nhau** (Ví dụ: nối Danh từ với Danh từ, Tính từ với Tính từ). Bạn có thể dễ dàng ghi nhớ toàn bộ nhóm này qua thần chú **FANBOYS**:

| **Chữ cái** | **Liên từ** | **Ý nghĩa** | **Ví dụ** |
| --- | --- | --- | --- |
| **F** | **For** | Vì (giống Because) | I drank some water, **for** I was thirsty. |
| **A** | **And** | Và (thêm thông tin) | She bought apples **and** oranges. |
| **N** | **Nor** | Cũng không | He doesn't eat meat, **nor** does he eat fish. |
| **B** | **But** | Nhưng (ngược lại) | The test was hard, **but** I passed. |
| **O** | **Or** | Hoặc (lựa chọn) | You can have tea **or** coffee. |
| **Y** | **Yet** | Nhưng, tuy nhiên | The weather was cold, **yet** bright and sunny. |
| **S** | **So** | Vì vậy (kết quả) | It was raining, **so** we stayed indoors. |

**Lưu ý:** Khi dùng FANBOYS để nối 2 mệnh đề độc lập hoàn chỉnh, bắt buộc phải có dấu phẩy , đứng trước liên từ.

**2. Liên từ tương quan (Correlative Conjunctions)**

Nhóm này luôn đi theo **cặp cố định**. Quy tắc quan trọng nhất là "Cấu trúc song song" (Parallelism): từ loại đứng sau từ thứ nhất phải giống hệt từ loại đứng sau từ thứ hai.

* **Both A and B:** Cả A và B. *(Động từ luôn chia số nhiều).*
* **Not only A but also B:** Không những A mà còn B.
* **Either A or B:** Hoặc A hoặc B.
* **Neither A nor B:** Không A cũng không B.

**Quy tắc chia động từ siêu quan trọng:** Với *Either...or*, *Neither...nor*, và *Not only...but also*, động từ trong câu sẽ được chia theo **Chủ ngữ gần nó nhất (Chủ ngữ B)**.

*Ví dụ:* Neither the manager nor **the employees are** happy. (Chia số nhiều theo *employees*).

**3. Liên từ phụ thuộc (Subordinating Conjunctions)**

Đây là nhóm dùng để nối một Mệnh đề phụ (không thể đứng một mình) vào một Mệnh đề chính để tạo thành câu phức.

| **Mối quan hệ** | **Các liên từ phổ biến** | **Nghĩa tiếng Việt** |
| --- | --- | --- |
| **Thời gian** | when, while, before, after, until, as soon as | khi, trong khi, trước, sau, cho đến khi, ngay khi |
| **Nguyên nhân** | because, since, as | bởi vì |
| **Nhượng bộ** | although, even though, though | mặc dù |
| **Điều kiện** | if, unless (= if not), provided that, as long as | nếu, trừ khi, với điều kiện là, miễn là |
| **Mục đích** | so that, in order that | để mà |

**4. Phân biệt "Liên từ" và "Giới từ" (Bẫy kinh điển)**

Đây là điểm dễ mất điểm nhất khi làm bài tập chọn từ. Dù mang nghĩa tiếng Việt giống hệt nhau, nhưng cách sử dụng ngữ pháp lại hoàn toàn khác biệt:

* **Nguyên nhân (Bởi vì):**
  + Dùng Liên từ: **Because / Since / As** + Mệnh đề (S + V).
  + Dùng Giới từ: **Because of / Due to** + Danh từ / V-ing.
* **Nhượng bộ (Mặc dù):**
  + Dùng Liên từ: **Although / Even though** + Mệnh đề (S + V).
  + Dùng Giới từ: **Despite / In spite of** + Danh từ / V-ing.
* **Thời gian (Trong khi):**
  + Dùng Liên từ: **While** + Mệnh đề (S + V).
  + Dùng Giới từ: **During** + Danh từ (chỉ một khoảng thời gian).

**5. Trạng từ liên kết (Conjunctive Adverbs)**

Tuy mang ý nghĩa nối câu, nhưng về mặt từ loại chúng là trạng từ. Chúng đòi hỏi **dấu câu** rất khắt khe: Thường đứng sau dấu chấm phẩy ; và trước dấu phẩy ,.

* **However, Nevertheless:** Tuy nhiên.
  + *Ví dụ:* The system crashed; however, no data was lost.
* **Therefore, Consequently:** Do đó, hậu quả là.
* **Moreover, Furthermore:** Hơn thế nữa.`,
  int: `Thán từ (Interjection - thường được ký hiệu là **Interj**) là từ loại đặc biệt nhất trong tiếng Anh. Nếu các từ loại khác xây dựng nên bộ khung và ý nghĩa logic cho câu, thì thán từ chính là "gia vị" cảm xúc.

Chúng được dùng để bộc lộ những cảm xúc đột ngột, mạnh mẽ như: ngạc nhiên, vui mừng, đau đớn, tức giận, hoặc đôi khi chỉ là những từ đệm (fillers) trong giao tiếp.

**1. Đặc điểm ngữ pháp "Độc nhất vô nhị"**

Khác biệt hoàn toàn với Danh, Động, Tính, Trạng... thán từ có những đặc quyền sau:

* **Không có sự liên kết ngữ pháp:** Thán từ đứng độc lập, không làm chủ ngữ, vị ngữ hay bổ nghĩa cho bất kỳ từ nào trong câu. Dù bạn bỏ thán từ đi, câu vẫn hoàn toàn đúng ngữ pháp.
* **Vị trí và Dấu câu:** Thường đứng ở đầu câu.
  + Nếu cảm xúc cực kỳ mạnh mẽ, nó đứng một mình và đi kèm dấu chấm than (!).
    - *Ví dụ:* **Ouch!** That hurts.
  + Nếu cảm xúc nhẹ nhàng hơn, nó được ngăn cách với câu bằng dấu phẩy (,).
    - *Ví dụ:* **Well,** I think we should wait.

**2. Phân loại Thán từ theo cảm xúc**

Dưới đây là các nhóm thán từ gặp rất thường xuyên trong phim ảnh, giao tiếp hàng ngày và văn bản thân mật:

| **Cảm xúc / Mục đích** | **Các thán từ phổ biến** | **Ví dụ thực tế** |
| --- | --- | --- |
| **Bất ngờ, Ngạc nhiên** | Oh, Wow, Gosh, My goodness | **Wow!** Your new mechanical keyboard looks amazing. |
| **Vui mừng, Phấn khích** | Yay, Hurrah, Bingo | **Yay!** We finally fixed the bug. |
| **Đau đớn vật lý** | Ouch, Ow | **Ouch!** I accidentally hit the desk. |
| **Ghê tởm, Khó chịu** | Ew, Ugh, Yuck | **Ew!** This coffee tastes terrible. |
| **Kêu gọi sự chú ý** | Hey, Psst, Look | **Hey!** Don't forget to save the database. |
| **Do dự, Câu giờ (Fillers)** | Um, Uh, Hmm, Well | **Hmm,** let me check the documentation again. |`,
  det: `Mặc dù ngữ pháp truyền thống thường xếp **Hạn định từ (Determiners - thường ký hiệu là Det)** vào chung nhóm với Tính từ, nhưng trong ngữ pháp hiện đại và đặc biệt là khi ôn thi, Hạn định từ là một khái niệm hoàn toàn riêng biệt.

Nếu Tính từ dùng để miêu tả *tính chất* của sự vật (tốt, xấu, to, nhỏ), thì Hạn định từ hoạt động như một "biển báo giao thông" đứng trước danh từ, nhằm **xác định rõ danh từ đó đang chỉ đối tượng nào, số lượng bao nhiêu, hay thuộc sở hữu của ai.**

Dưới đây là những điểm cốt lõi nhất về Hạn định từ mà bạn cần nắm chắc để không bị mất điểm oan.

**1. Vị trí "Bất di bất dịch"**

Quy tắc nền tảng của hạn định từ là: **Luôn đứng TRƯỚC Danh từ và đứng trước cả Tính từ (nếu có).**

Cấu trúc: **[Hạn định từ] + (Tính từ) + Danh từ**

* *Ví dụ:* **This** mechanical keyboard (Chiếc bàn phím cơ **này**).
* *Ví dụ:* **Some** complex database logs (Một **vài** bản ghi cơ sở dữ liệu phức tạp).

**2. Bảng phân loại Hạn định từ**

Có 5 nhóm hạn định từ chính thường xuyên xuất hiện trong các bài đọc hiểu:

| **Nhóm Hạn định từ** | **Bao gồm các từ** | **Ví dụ ứng dụng** |
| --- | --- | --- |
| **Mạo từ (Articles)** | a, an, the | Can you restart **the** server? |
| **Từ chỉ định (Demonstratives)** | this, that, these, those | **This** error keeps happening. |
| **Tính từ sở hữu (Possessives)** | my, your, his, her, its, our, their | We need to update **our** system. |
| **Từ phân bổ (Distributives)** | each, every, either, neither | **Every** file must be translated. |
| **Lượng từ (Quantifiers)** | some, any, much, many, all, few, little... | There are **many** open tabs. |

**3. Các "Bẫy" Lượng từ (Quantifiers) kinh điển trong bài thi**

Đây là phần "ăn tiền" nhất của Hạn định từ. Các bài thi luôn kiểm tra xem bạn có biết Lượng từ nào đi với loại Danh từ nào hay không.

**Bẫy 1: Đi với Danh từ đếm được vs. Không đếm được**

Hãy nhớ lại bài học về Danh từ để áp dụng quy tắc này:

* **Chỉ đi với Danh từ ĐẾM ĐƯỢC (số nhiều):** many (nhiều), few / a few (một ít), several (một vài), a number of.
  + *Ví dụ:* **many** errors, **a few** users.
* **Chỉ đi với Danh từ KHÔNG ĐẾM ĐƯỢC:** much (nhiều), little / a little (một ít), a great deal of.
  + *Ví dụ:* **much** traffic, **a little** time.
* **Dùng được cho CẢ HAI:** all (tất cả), some (một vài), any (bất kỳ), a lot of / lots of (nhiều).

**Bẫy 2: Phân biệt "A few / A little" và "Few / Little"**

Sự khác biệt nằm ở chữ "A", và nó thay đổi hoàn toàn ý nghĩa câu:

* **Có "A" (A few / A little) - Mang nghĩa Tích cực:** Dịch là "có một chút, đủ để dùng".
  + *Ví dụ:* I have **a few** switches left. (Tôi còn một vài switch bàn phím, đủ để thay).
* **Không có "A" (Few / Little) - Mang nghĩa Tiêu cực:** Dịch là "rất ít, gần như không có, không đủ".
  + *Ví dụ:* We have **little** time to fix this bug. (Chúng ta có quá ít thời gian để sửa lỗi này -> ngụ ý không kịp).

**Bẫy 3: Bẫy "Some" và "Any"**

* **Some:** Dùng trong câu **Khẳng định** và Lời mời/Yêu cầu lịch sự.
  + *Ví dụ:* I need **some** help with this code.
* **Any:** Dùng trong câu **Phủ định** (có not) và **Nghi vấn** (câu hỏi).
  + *Ví dụ:* There aren't **any** bugs in this release.

**4. Bẫy Mạo từ "A/An/The"**

* **A/An:** Đi với danh từ đếm được, số ít, **chưa xác định** (nhắc đến lần đầu). "An" đứng trước các từ bắt đầu bằng nguyên âm (u, e, o, a, i).
* **The:** Dùng khi người nói và người nghe **đều đã biết rõ** đối tượng đó là gì (đã nhắc đến trước đó, hoặc là duy nhất).
  + *Ví dụ:* I bought **a** keyboard. **The** keyboard is very responsive. *(Câu trước dùng "a" vì mới nhắc lần đầu, câu sau dùng "the" vì đã xác định).*

**Tuyệt đối ghi nhớ:** KHÔNG bao giờ dùng "a/an" trước danh từ không đếm được (như *information, software, equipment, water*).`,
};


// ============================================================
// RICH CONTENT ENGINE
// Converts the Vietnamese grammar markdown into scannable UI
// components instead of a wall of prose (formula blocks, example
// cards, exam-trap / tip alerts, and modern tables).
// ============================================================

const RC_COLOR_HEX = {
  sky: '#5EC8E8', rose: '#E2604F', violet: '#B98CE0', emerald: '#6FD9A8',
  yellow: '#E0A94A', pink: '#F28FA8', indigo: '#8CA0E0', slate: '#94A9BD',
  amber: '#E0A94A'
};
const rcHex = (color) => RC_COLOR_HEX[color] || '#5EC8E8';

const RC_TRAP_KEYWORDS = /(Bẫy|Ngoại lệ|Phân biệt|ngoại lệ)/i;
const RC_ALERT_KEYWORDS = /^(Lưu ý|Chú ý|Tuyệt đối|Ghi nhớ|Mẹo|Quy tắc|Bẫy|Ngoại lệ|Phân biệt)/i;

// Strip markdown emphasis markers to test raw semantic content
function rcStripMd(s) { return s.replace(/\*\*|\*|`/g, '').trim(); }

function rcInline(text) {
  // Inline-only markdown (bold/italic), no wrapping <p>
  return marked.parseInline(text || '');
}

// Detect and format a "formula-like" line (S + V + O, X -> Y, etc.)
function rcIsFormula(raw) {
  const t = raw.trim();
  if (t.length > 100) return false;
  const stripped = rcStripMd(t);
  if (/^Cấu trúc:?/i.test(stripped)) return true;
  const plusCount = (t.match(/\s\+\s/g) || []).length;
  const arrowCount = (t.match(/->/g) || []).length;
  if (plusCount >= 1 && !/[.?!]$/.test(stripped) && stripped.split(' ').length < 16) return true;
  if (arrowCount >= 1 && stripped.split(' ').length < 16) return true;
  return false;
}

function rcFormulaBlock(raw, color) {
  let text = raw.trim();
  let label = 'CẤU TRÚC';
  const m = text.match(/^Cấu trúc:?\s*(.*)$/i);
  if (m) { text = m[1]; }
  return `<div class="rc-formula" style="--rc-color:${rcHex(color)}">
                <span class="rc-formula-tag">${label}</span>
                <span class="rc-formula-body">${rcInline(text)}</span>
            </div>`;
}

// Split a "Ví dụ" sentence into English example + Vietnamese gloss
function rcSplitExample(raw) {
  let text = raw.trim();
  text = text.replace(/^\*{1,2}Ví dụ:?\*{1,2}\s*/i, '');
  const m = text.match(/^(.*?)\s*\(([^()]*)\)\.?\s*$/);
  if (m && /[ĐđÀ-ỹ]/.test(m[2])) {
    return { en: m[1].trim(), vi: m[2].trim() };
  }
  return { en: text, vi: '' };
}

function rcExampleCard(raw, variant) {
  const { en, vi } = rcSplitExample(raw);
  const cls = variant === 'neg' ? 'rc-ex-neg' : (variant === 'q' ? 'rc-ex-q' : '');
  const icon = variant === 'neg' ? 'NEG' : (variant === 'q' ? 'Q' : 'EX');
  return `<div class="rc-example ${cls}">
                <span class="rc-ex-icon">${icon}</span>
                <div>
                    <div class="rc-ex-en">${rcInline(en)}</div>
                    ${vi ? `<div class="rc-ex-vi">${rcInline(vi)}</div>` : ''}
                </div>
            </div>`;
}

function rcAlertBox(raw) {
  const stripped = rcStripMd(raw.replace(/^[\*\(]+/, ''));
  const isTrap = /^(Bẫy|Ngoại lệ|Phân biệt)/i.test(stripped) || /bẫy/i.test(raw.slice(0, 40));
  const type = isTrap ? 'trap' : 'tip';
  const badge = isTrap ? '⚠ BẪY' : '💡 LƯU Ý';
  return `<div class="rc-alert ${type}">
                <span class="rc-alert-badge">${badge}</span>
                <div class="rc-alert-body">${rcInline(raw.trim())}</div>
            </div>`;
}

function rcTable(rows, color) {
  if (!rows.length) return '';
  const header = rows[0];
  const body = rows.slice(1); // separator row was already filtered out by the caller
  let html = `<div class="rc-table-wrap" style="--rc-color:${rcHex(color)}"><div class="rc-table-scroll"><table class="rc-table"><thead><tr>`;
  header.forEach(cell => html += `<th>${rcInline(cell)}</th>`);
  html += `</tr></thead><tbody>`;
  body.forEach(r => {
    html += `<tr>`;
    r.forEach(cell => html += `<td>${rcInline(cell)}</td>`);
    html += `</tr>`;
  });
  html += `</tbody></table></div></div>`;
  return html;
}

function rcParseTableLine(line) {
  return line.trim().replace(/^\||\|$/g, '').split('|').map(c => c.trim());
}

// Build a nested list tree from consecutive markdown list lines
function rcParseListLines(lines, startIdx) {
  const items = [];
  const stack = [{ indent: -1, items }];
  let i = startIdx;
  while (i < lines.length) {
    const line = lines[i];
    if (line.trim() === '') { i++; continue; }
    const m = line.match(/^(\s*)([*+-]|\d+\.)\s+(.*)$/);
    if (!m) break;
    const indent = m[1].length;
    const ordered = /\d+\./.test(m[2]);
    const node = { text: m[3], ordered, children: [] };
    while (stack.length > 1 && indent <= stack[stack.length - 1].indent) stack.pop();
    stack[stack.length - 1].items.push(node);
    stack.push({ indent, items: node.children });
    i++;
  }
  return { items, nextIdx: i };
}

function rcRenderListItems(items, color) {
  if (!items.length) return '';
  const ordered = items[0].ordered;
  let html = `<div class="rc-list ${ordered ? 'rc-ordered' : 'rc-unordered'}" style="--rc-color:${rcHex(color)}">`;
  items.forEach(item => {
    const isExample = /^\*{1,2}Ví dụ:?\*{1,2}/i.test(item.text.trim());
    if (isExample) {
      html += rcExampleCard(item.text, 'ex');
    } else {
      html += `<div class="rc-list-item">${rcInline(item.text)}`;
      if (item.children.length) html += rcRenderListItems(item.children, color);
      html += `</div>`;
    }
  });
  html += `</div>`;
  return html;
}

// Master parser: markdown string -> array of typed blocks
function rcParseBlocks(md) {
  const lines = md.split('\n');
  const blocks = [];
  let i = 0;
  while (i < lines.length) {
    const raw = lines[i];
    const line = raw.trim();
    if (line === '') { i++; continue; }

    // Pure bold entire-line -> header or formula
    const headerM = line.match(/^\*\*(.+)\*\*$/);
    if (headerM && !line.includes('|')) {
      const inner = headerM[1];
      if (rcIsFormula(inner)) {
        blocks.push({ type: 'formula', text: inner });
        i++; continue;
      }
      const numM = inner.match(/^(\d+)\.\s*(.*)$/);
      blocks.push({
        type: 'header',
        level: numM ? 3 : 4,
        num: numM ? numM[1] : null,
        text: numM ? numM[2] : inner,
        trap: RC_TRAP_KEYWORDS.test(inner)
      });
      i++; continue;
    }

    // Table block
    if (line.startsWith('|')) {
      const tableLines = [];
      let j = i;
      while (j < lines.length && lines[j].trim().startsWith('|')) {
        tableLines.push(lines[j].trim());
        j++;
      }
      const rows = tableLines.filter((l, idx) => idx !== 1).map(rcParseTableLine);
      blocks.push({ type: 'table', rows });
      i = j; continue;
    }

    // List block
    if (/^(\s*)([*+-]|\d+\.)\s+/.test(raw)) {
      const { items, nextIdx } = rcParseListLines(lines, i);
      blocks.push({ type: 'list', items });
      i = nextIdx; continue;
    }

    // Paragraph (gather until blank line or new construct)
    let paraLines = [line];
    let j = i + 1;
    while (j < lines.length) {
      const t = lines[j].trim();
      if (t === '') break;
      if (/^\*\*(.+)\*\*$/.test(t) && !t.includes('|')) break;
      if (t.startsWith('|')) break;
      if (/^(\s*)([*+-]|\d+\.)\s+/.test(lines[j])) break;
      paraLines.push(t);
      j++;
    }
    const paraText = paraLines.join(' ');
    if (rcIsFormula(paraText)) {
      blocks.push({ type: 'formula', text: paraText });
    } else if (RC_ALERT_KEYWORDS.test(rcStripMd(paraText.replace(/^[\*\(]+/, '')))) {
      blocks.push({ type: 'alert', text: paraText });
    } else {
      blocks.push({ type: 'para', text: paraText });
    }
    i = j;
  }
  return blocks;
}

function rcRenderBlocks(blocks, color) {
  let html = '';
  blocks.forEach(b => {
    if (b.type === 'header') {
      const tag = b.level === 3 ? 'rc-h3' : 'rc-h4';
      const trapCls = b.trap ? 'rc-trap' : '';
      html += `<div class="${tag} ${trapCls}" style="--rc-color:${rcHex(color)}">
                        ${b.num ? `<span class="rc-num">${b.num.padStart(2, '0')}</span>` : ''}
                        <span>${rcInline(b.text)}</span>
                    </div>`;
    } else if (b.type === 'table') {
      html += rcTable(b.rows, color);
    } else if (b.type === 'list') {
      html += rcRenderListItems(b.items, color);
    } else if (b.type === 'formula') {
      html += rcFormulaBlock(b.text, color);
    } else if (b.type === 'alert') {
      html += rcAlertBox(b.text);
    } else {
      html += `<p class="rc-p">${rcInline(b.text)}</p>`;
    }
  });
  return html;
}

function renderRichContent(md, color) {
  return rcRenderBlocks(rcParseBlocks(md), color);
}

// App Logic
function renderSidebar() {
  const menu = document.getElementById('pos-menu');
  posData.forEach((pos, i) => {
    const btn = document.createElement('button');
    btn.id = `nav-${pos.id}`;
    btn.className = 'sheet-item stagger-item py-3 px-6 text-left text-sm flex items-center gap-3 w-full';
    btn.style.animationDelay = `${0.25 + i * 0.04}s`;
    btn.innerHTML = `<span class="code-box text-[10px] w-7 h-7 flex items-center justify-center border border-${pos.color}-500/40 text-${pos.color}-400 rounded transition-transform duration-300">${pos.sym}</span> ${pos.title}`;
    btn.onclick = () => switchView('detail', pos.id);
    menu.appendChild(btn);
  });
}

function renderQuickGrid() {
  const grid = document.getElementById('quick-grid');
  posData.forEach((pos, i) => {
    const card = document.createElement('div');
    card.className = `panel stagger-item p-5 rounded-sm cursor-pointer group hover:border-${pos.color}-500/50`;
    card.style.animationDelay = `${0.15 + i * 0.05}s`;
    card.onclick = () => switchView('detail', pos.id);
    card.innerHTML = `
                    <div class="flex items-center gap-3 mb-3">
                        <div class="code-box w-9 h-9 rounded-sm border border-${pos.color}-500/40 text-${pos.color}-400 flex items-center justify-center font-semibold text-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_16px_-4px_currentColor]">
                            ${pos.sym}
                        </div>
                        <div class="font-semibold text-sm text-slate-200 group-hover:text-${pos.color}-400 transition-colors duration-300 font-display">${pos.title}</div>
                    </div>
                    <p class="text-xs text-[var(--ink-dim)] leading-relaxed line-clamp-2">${pos.meaning}</p>
                `;
    grid.appendChild(card);
  });
}

function initAnalyzer() {
  const tokens = document.querySelectorAll('.word-token');
  const feedback = document.getElementById('analyzer-feedback');

  tokens.forEach(token => {
    token.addEventListener('mouseenter', () => {
      feedback.innerHTML = `<span class="text-white font-semibold font-display">${token.dataset.word}</span> <span class="text-[var(--ink-faint)]">—</span> <span>${token.getAttribute('data-pos')}</span>`;
    });
    token.addEventListener('mouseleave', () => {
      feedback.innerText = 'Di chuột qua các từ bên trên để xem giải thích chi tiết.';
    });
  });
}

function switchView(viewId, posId = null) {
  const updateDOM = () => {
    document.getElementById('view-dashboard').classList.add('hidden');
    document.getElementById('view-detail').classList.add('hidden');
    document.getElementById('view-tenses').classList.add('hidden');

    if (viewId === 'detail' && posId) {
      showDetail(posId);
    }

    document.getElementById(`view-${viewId}`).classList.remove('hidden');

    document.querySelectorAll('.sheet-item').forEach(el => el.classList.remove('active'));

    const activeId = posId ? `nav-${posId}` : `nav-${viewId}`;
    const navEl = document.getElementById(activeId);
    if (navEl) navEl.classList.add('active');
  };

  if (document.startViewTransition) {
    document.startViewTransition(() => updateDOM());
  } else {
    updateDOM();
  }
}

function showDetail(id) {
  const data = posData.find(p => p.id === id);
  const body = posBodies[id];
  const container = document.getElementById('detail-content');

  container.innerHTML = `
                <div class="rise-in">
                    <div class="flex items-center gap-6 mb-10 flex-wrap">
                        <div class="code-box w-20 h-20 border border-${data.color}-500/40 text-${data.color}-400 rounded-sm flex items-center justify-center text-3xl font-semibold shadow-[0_0_28px_-10px_currentColor] transition-transform duration-500 hover:rotate-3 hover:scale-105">
                            ${data.sym}
                        </div>
                        <div>
                            <div class="code-box text-[10px] text-[var(--ink-faint)] uppercase tracking-[0.18em] mb-1">Danh mục — Từ loại</div>
                            <h2 class="text-4xl md:text-5xl font-bold text-white font-display tracking-tight">${data.title}</h2>
                            <p class="text-${data.color}-400 font-mono uppercase tracking-[0.18em] text-xs mt-2">${data.eng}</p>
                        </div>
                    </div>

                    <div class="panel p-6 md:p-9 rounded-sm">
                        ${renderRichContent(body, data.color)}
                    </div>
                </div>
            `;
}

function renderTenses() {
  const mdContent = `**1. Hiện tại đơn (Present Simple)**

* **Công thức:**
  + Khẳng định: S + V(s/es) + O
  + Phủ định: S + do/does + not + V
  + Nghi vấn: Do/Does + S + V?
* **Cách sử dụng:**
  + Diễn tả sự thật hiển nhiên, thói quen hoặc hành động lặp đi lặp lại.
  + Diễn tả lịch trình, thời gian biểu.
* **Dấu hiệu nhận biết:**
  + Các trạng từ chỉ tần suất: always, usually, often, sometimes, rarely, never.
  + Các trạng từ chỉ thời gian: every day, every week, on Mondays, in the morning.
* **Ví dụ:**
  + Khẳng định: She always goes to school by bike.
  + Phủ định: They do not (don’t) play soccer on Sundays.
  + Nghi vấn: Do you often watch movies?

**2. Hiện tại tiếp diễn (Present Continuous)**

* **Công thức:**
  + Khẳng định: S + am/is/are + V-ing
  + Phủ định: S + am/is/are + not + V-ing
  + Nghi vấn: Am/Is/Are + S + V-ing?
* **Cách sử dụng:**
  + Diễn tả hành động đang diễn ra tại thời điểm nói.
  + Diễn tả hành động xảy ra xung quanh thời điểm hiện tại nhưng không nhất thiết phải diễn ra ngay lúc nói.
  + Diễn tả kế hoạch trong tương lai gần.
* **Dấu hiệu nhận biết:**
  + now, right now, at the moment, currently.
* **Ví dụ:**
  + Khẳng định: She is reading a book now.
  + Phủ định: They are not watching TV at the moment.
  + Nghi vấn: Are you doing your homework?

**3. Hiện tại hoàn thành (Present Perfect)**

* **Công thức:**
  + Khẳng định: S + have/has + V3/ed
  + Phủ định: S + have/has + not + V3/ed
  + Nghi vấn: Have/Has + S + V3/ed?
* **Cách sử dụng:**
  + Diễn tả hành động xảy ra ở một thời điểm không xác định trong quá khứ.
  + Diễn tả hành động bắt đầu trong quá khứ và kéo dài đến hiện tại.
  + Diễn tả kinh nghiệm, trải nghiệm.
* **Dấu hiệu nhận biết:**
  + just, recently, already, yet, ever, never, since, for.
* **Ví dụ:**
  + Khẳng định: I have already finished my homework.
  + Phủ định: She has not (hasn’t) visited Paris yet.
  + Nghi vấn: Have you ever eaten sushi?

**4. Hiện tại hoàn thành tiếp diễn (Present Perfect Continuous)**

* **Công thức:**
  + Khẳng định: S + have/has + been + V-ing
  + Phủ định: S + have/has + not + been + V-ing
  + Nghi vấn: Have/Has + S + been + V-ing?
* **Cách sử dụng:**
  + Diễn tả hành động bắt đầu trong quá khứ và tiếp tục kéo dài đến hiện tại (nhấn mạnh sự liên tục).
  + Diễn tả hành động đã xảy ra trong quá khứ và có kết quả ảnh hưởng đến hiện tại.
* **Dấu hiệu nhận biết:**
  + for, since, all day, all morning, recently, lately.
* **Ví dụ:**
  + Khẳng định: She has been studying English for 3 years.
  + Phủ định: They have not (haven’t) been playing soccer since morning.
  + Nghi vấn: Have you been working here for a long time?

**5. Quá khứ đơn (Past Simple)**

* **Công thức:**
  + Khẳng định: S + V2/ed
  + Phủ định: S + did not (didn’t) + V
  + Nghi vấn: Did + S + V?
* **Cách sử dụng:**
  + Diễn tả hành động đã xảy ra và kết thúc trong quá khứ.
* **Dấu hiệu nhận biết:**
  + yesterday, last night, last week, in 2010, two days ago.
* **Ví dụ:**
  + Khẳng định: She visited her grandparents last week.
  + Phủ định: They didn’t go to the party yesterday.
  + Nghi vấn: Did you see that movie last night?

**6. Quá khứ tiếp diễn (Past Continuous)**

* **Công thức:**
  + Khẳng định: S + was/were + V-ing
  + Phủ định: S + was/were + not + V-ing
  + Nghi vấn: Was/Were + S + V-ing?
* **Cách sử dụng:**
  + Diễn tả hành động đang diễn ra tại một thời điểm cụ thể trong quá khứ.
  + Diễn tả hành động đang diễn ra thì có hành động khác xen vào.
* **Dấu hiệu nhận biết:**
  + at this time yesterday, at that moment, while, when.
* **Ví dụ:**
  + Khẳng định: They were playing soccer at 4 pm yesterday.
  + Phủ định: She was not (wasn’t) sleeping when I called her.
  + Nghi vấn: Were you studying at this time yesterday?

**7. Quá khứ hoàn thành (Past Perfect)**

* **Công thức:**
  + Khẳng định: S + had + V3/ed
  + Phủ định: S + had + not + V3/ed
  + Nghi vấn: Had + S + V3/ed?
* **Cách sử dụng:**
  + Diễn tả hành động xảy ra trước một hành động khác trong quá khứ.
* **Dấu hiệu nhận biết:**
  + before, after, by the time.
* **Ví dụ:**
  + Khẳng định: She had left before he arrived.
  + Phủ định: They had not (hadn’t) eaten when I came.
  + Nghi vấn: Had you finished your homework before you went out?

**8. Quá khứ hoàn thành tiếp diễn (Past Perfect Continuous)**

* **Công thức:**
  + Khẳng định: S + had + been + V-ing
  + Phủ định: S + had + not + been + V-ing
  + Nghi vấn: Had + S + been + V-ing?
* **Cách sử dụng:**
  + Diễn tả hành động đã diễn ra liên tục trước một hành động khác trong quá khứ.
  + Nhấn mạnh tính liên tục của hành động trước một thời điểm hoặc hành động khác trong quá khứ.
* **Dấu hiệu nhận biết:**
  + for, since, before, by the time, when.
* **Ví dụ:**
  + Khẳng định: She had been waiting for two hours before the bus arrived.
  + Phủ định: They had not (hadn’t) been living in the city for long before they moved to the countryside.
  + Nghi vấn: Had you been working there long before you got promoted?

**9. Tương lai đơn (Future Simple)**

* **Công thức:**
  + Khẳng định: S + will + V
  + Phủ định: S + will + not (won’t) + V
  + Nghi vấn: Will + S + V?
* **Cách sử dụng:**
  + Diễn tả hành động sẽ xảy ra trong tương lai.
  + Diễn tả quyết định ngay tại thời điểm nói.
* **Dấu hiệu nhận biết:**
  + tomorrow, next week, in the future, soon.
* **Ví dụ:**
  + Khẳng định: I will travel to Japan next year.
  + Phủ định: She will not (won’t) attend the meeting tomorrow.
  + Nghi vấn: Will you come to the party?

**10. Tương lai gần (Be Going To)**

* **Công thức:**
  + Khẳng định: S + am/is/are + going to + V
  + Phủ định: S + am/is/are + not + going to + V
  + Nghi vấn: Am/Is/Are + S + going to + V?
* **Cách sử dụng:**
  + Diễn tả hành động dự định sẽ làm trong tương lai.
  + Diễn tả hành động sắp xảy ra có dấu hiệu rõ ràng.
* **Dấu hiệu nhận biết:**
  + tương tự như Future Simple nhưng có sự chắc chắn hơn.
* **Ví dụ:**
  + Khẳng định: They are going to visit their grandparents this weekend.
  + Phủ định: I am not going to watch that movie.
  + Nghi vấn: Are you going to study abroad?

**11. Tương lai tiếp diễn (Future Continuous)**

* **Công thức:**
  + Khẳng định: S + will be + V-ing
  + Phủ định: S + will not (won’t) be + V-ing
  + Nghi vấn: Will + S + be + V-ing?
* **Cách sử dụng:**
  + Diễn tả hành động đang diễn ra tại một thời điểm cụ thể trong tương lai.
* **Dấu hiệu nhận biết:**
  + at this time tomorrow, at this moment next year.
* **Ví dụ:**
  + Khẳng định: She will be studying at 8 pm tomorrow.
  + Phủ định: They will not (won’t) be traveling this time next week.
  + Nghi vấn: Will you be working at 10 am tomorrow?

**12. Tương lai hoàn thành (Future Perfect)**

* **Công thức:**
  + Khẳng định: S + will have + V3/ed
  + Phủ định: S + will not (won’t) have + V3/ed
  + Nghi vấn: Will + S + have + V3/ed?
* **Cách sử dụng:**
  + Diễn tả hành động sẽ hoàn thành trước một thời điểm hoặc hành động khác trong tương lai.
* **Dấu hiệu nhận biết:**
  + by, by the time, before, after.
* **Ví dụ:**
  + Khẳng định: I will have finished my project by next Monday.
  + Phủ định: She will not (won’t) have left before you arrive.
  + Nghi vấn: Will you have graduated by 2025?

**13. Tương lai hoàn thành tiếp diễn (Future Perfect Continuous)**

* **Công thức:**
  + Khẳng định: S + will + have + been + V-ing
  + Phủ định: S + will + not + have + been + V-ing
  + Nghi vấn: Will + S + have + been + V-ing?
* **Cách sử dụng:**
  + Diễn tả hành động sẽ diễn ra liên tục cho đến một thời điểm nào đó trong tương lai.
* **Dấu hiệu nhận biết:**
  + for, by the time, by then, by + thời gian cụ thể trong tương lai.
* **Ví dụ:**
  + Khẳng định: By next month, I will have been working here for a year.
  + Phủ định: They will not (won’t) have been studying for long by the time the semester ends.
  + Nghi vấn: Will you have been traveling for two weeks by the end of this month?

**Chú thích ký hiệu**

* **S**: Chủ ngữ (Subject)
* **V**: Động từ nguyên mẫu (Verb)
* **V(s/es)**: Động từ chia ở ngôi thứ ba số ít trong thì hiện tại đơn
* **V2/ed**: Động từ chia ở dạng quá khứ
* **V3/ed**: Quá khứ phân từ
* **V-ing**: Động từ thêm "ing"
* **O**: Tân ngữ (Object)
* **do/does/did**: Trợ động từ dùng trong thì hiện tại/quá khứ đơn
* **am/is/are/was/were**: Trợ động từ "to be"
* **have/has/had**: Trợ động từ hoàn thành
* **will**: Trợ động từ dùng trong thì tương lai`;

  // --- Split the raw markdown into one chunk per tense ---
  const lines = mdContent.split('\n');
  let tenses = [];
  let currentTense = null;

  for (let line of lines) {
    if (line.startsWith('**') && line.match(/^\*\*\d+\./)) {
      if (currentTense) tenses.push(currentTense);
      currentTense = { name: line.replace(/\*\*/g, '').trim(), content: '' };
    } else if (line.startsWith('**Chú thích')) {
      if (currentTense) tenses.push(currentTense);
      currentTense = { name: 'Chú thích ký hiệu', content: '', isLegend: true };
    } else {
      if (currentTense) currentTense.content += line + '\n';
    }
  }
  if (currentTense) tenses.push(currentTense);

  const legend = tenses.find(t => t.isLegend);
  const tenseList = tenses.filter(t => !t.isLegend);

  // --- Parse each tense's fixed structure: Công thức / Cách sử dụng / Dấu hiệu / Ví dụ ---
  function grabSection(content, label, nextLabels) {
    const startRe = new RegExp('\\*\\*' + label + ':?\\*\\*');
    const sm = content.match(startRe);
    if (!sm) return '';
    let rest = content.slice(sm.index + sm[0].length);
    let endIdx = rest.length;
    nextLabels.forEach(nl => {
      const em = rest.match(new RegExp('\\*\\*' + nl + ':?\\*\\*'));
      if (em && em.index < endIdx) endIdx = em.index;
    });
    return rest.slice(0, endIdx);
  }
  function grabBullets(section) {
    const re = /[+*]\s*(.+)/g;
    let m, out = [];
    while ((m = re.exec(section)) !== null) {
      const t = m[1].trim();
      if (t) out.push(t);
    }
    return out;
  }
  function grabSignals(section) {
    const words = [];
    grabBullets(section).forEach(b => {
      const parts = b.split(':');
      const listPart = parts.length > 1 ? parts.slice(1).join(':') : parts[0];
      listPart.split(',').forEach(w => {
        w = w.trim().replace(/\.$/, '');
        if (w) words.push(w);
      });
    });
    return words;
  }
  function grabTriplet(section) {
    const res = { aff: '', neg: '', q: '' };
    const affM = section.match(/Khẳng định:\s*(.+)/);
    const negM = section.match(/Phủ định:\s*(.+)/);
    const qM = section.match(/Nghi vấn:\s*(.+)/);
    if (affM) res.aff = affM[1].trim();
    if (negM) res.neg = negM[1].trim();
    if (qM) res.q = qM[1].trim();
    return res;
  }

  const parsed = tenseList.map(t => {
    const labels = ['Công thức', 'Cách sử dụng', 'Dấu hiệu nhận biết', 'Ví dụ'];
    const formulaSec = grabSection(t.content, 'Công thức', ['Cách sử dụng', 'Dấu hiệu nhận biết', 'Ví dụ']);
    const usageSec = grabSection(t.content, 'Cách sử dụng', ['Dấu hiệu nhận biết', 'Ví dụ']);
    const signalSec = grabSection(t.content, 'Dấu hiệu nhận biết', ['Ví dụ']);
    const exampleSec = grabSection(t.content, 'Ví dụ', []);

    let category = 'present';
    if (t.name.includes('Quá khứ')) category = 'past';
    else if (t.name.includes('Tương lai')) category = 'future';

    const nameMatch = t.name.match(/^\d+\.\s*(.+?)(\s*\(([^)]+)\))?$/);
    const viName = nameMatch ? nameMatch[1].trim() : t.name;
    const enName = nameMatch && nameMatch[3] ? nameMatch[3].trim() : '';

    return {
      viName, enName, category,
      formula: grabTriplet(formulaSec),
      usage: grabBullets(usageSec),
      signals: grabSignals(signalSec),
      examples: grabTriplet(exampleSec)
    };
  });

  const CAT_META = {
    past: { label: 'Quá khứ', color: '#94A9BD', tagBg: 'rgba(148,163,184,0.12)' },
    present: { label: 'Hiện tại', color: '#5EC8E8', tagBg: 'rgba(94,200,232,0.12)' },
    future: { label: 'Tương lai', color: '#E0A94A', tagBg: 'rgba(224,169,74,0.12)' }
  };

  function tenseCardHTML(t, idx) {
    const meta = CAT_META[t.category];
    return `
                <div class="panel tense-card stagger-item p-6 md:p-7 rounded-sm border-t-2" data-category="${t.category}"
                     style="border-top-color:${meta.color}; animation-delay:${0.04 + idx * 0.03}s">
                    <div class="tc-header">
                        <span class="tc-tag" style="color:${meta.color}; background:${meta.tagBg}; border:1px solid ${meta.color}66;">T-${String(idx + 1).padStart(2, '0')}</span>
                        <div>
                            <div class="tc-title">${t.viName}</div>
                            ${t.enName ? `<div class="tc-subtitle" style="color:${meta.color}">${t.enName}</div>` : ''}
                        </div>
                    </div>

                    <div class="tc-block-label">Công thức</div>
                    <div class="rc-formula-group">
                        ${t.formula.aff ? `<div class="rc-formula-row rc-aff"><span class="rc-flabel">Khẳng định</span><span class="rc-fbody">${rcInline(t.formula.aff)}</span></div>` : ''}
                        ${t.formula.neg ? `<div class="rc-formula-row rc-neg"><span class="rc-flabel">Phủ định</span><span class="rc-fbody">${rcInline(t.formula.neg)}</span></div>` : ''}
                        ${t.formula.q ? `<div class="rc-formula-row rc-q"><span class="rc-flabel">Nghi vấn</span><span class="rc-fbody">${rcInline(t.formula.q)}</span></div>` : ''}
                    </div>

                    ${t.usage.length ? `
                    <div class="tc-block-label">Cách sử dụng</div>
                    <div class="rc-list rc-unordered" style="--rc-color:${meta.color}">
                        ${t.usage.map(u => `<div class="rc-list-item">${rcInline(u)}</div>`).join('')}
                    </div>` : ''}

                    ${t.signals.length ? `
                    <div class="tc-block-label">Dấu hiệu nhận biết</div>
                    <div class="rc-chip-row" style="--rc-color:${meta.color}">
                        ${t.signals.map(s => `<span class="rc-chip">${rcInline(s)}</span>`).join('')}
                    </div>` : ''}

                    ${(t.examples.aff || t.examples.neg || t.examples.q) ? `
                    <div class="tc-block-label">Ví dụ</div>
                    ${t.examples.aff ? rcExampleCard(t.examples.aff, 'ex') : ''}
                    ${t.examples.neg ? rcExampleCard(t.examples.neg, 'neg') : ''}
                    ${t.examples.q ? rcExampleCard(t.examples.q, 'q') : ''}
                    ` : ''}
                </div>`;
  }

  function legendHTML() {
    if (!legend) return '';
    const items = [];
    const re = /\*\s*\*\*(.+?)\*\*:\s*(.+)/g;
    let m;
    while ((m = re.exec(legend.content)) !== null) {
      items.push({ sym: m[1].trim(), def: m[2].trim() });
    }
    return `
                <div class="panel p-6 md:p-7 rounded-sm border-t-2 mt-8" style="border-top-color:#F28FA8">
                    <div class="tc-header">
                        <span class="tc-tag" style="color:#F28FA8; background:rgba(242,143,168,0.12); border:1px solid #F28FA866;">KEY</span>
                        <div class="tc-title">Chú thích ký hiệu</div>
                    </div>
                    <div class="glossary-grid">
                        ${items.map(it => `
                        <div class="glossary-item">
                            <span class="glossary-sym">${rcInline(it.sym)}</span>
                            <span class="glossary-def">${rcInline(it.def)}</span>
                        </div>`).join('')}
                    </div>
                </div>`;
  }

  const counts = { all: parsed.length, past: 0, present: 0, future: 0 };
  parsed.forEach(t => counts[t.category]++);

  const tabsHTML = `
                <div class="tense-tabs mb-8">
                    <button class="tense-tab active" data-tab="all" style="--tt-color:#5EC8E8" onclick="switchTenseTab('all', this)">Tất cả <span class="tt-count">${counts.all}</span></button>
                    <button class="tense-tab" data-tab="past" style="--tt-color:#94A9BD" onclick="switchTenseTab('past', this)">Quá khứ <span class="tt-count">${counts.past}</span></button>
                    <button class="tense-tab" data-tab="present" style="--tt-color:#5EC8E8" onclick="switchTenseTab('present', this)">Hiện tại <span class="tt-count">${counts.present}</span></button>
                    <button class="tense-tab" data-tab="future" style="--tt-color:#E0A94A" onclick="switchTenseTab('future', this)">Tương lai <span class="tt-count">${counts.future}</span></button>
                </div>`;

  const gridHTML = `<div id="tense-grid" class="grid grid-cols-1 lg:grid-cols-2 gap-5">
                ${parsed.map((t, i) => tenseCardHTML(t, i)).join('')}
            </div>`;

  document.getElementById('tenses-content').innerHTML = tabsHTML + gridHTML + legendHTML();
}

function switchTenseTab(cat, btnEl) {
  document.querySelectorAll('.tense-tab').forEach(b => b.classList.remove('active'));
  btnEl.classList.add('active');
  document.querySelectorAll('.tense-card').forEach(card => {
    const show = cat === 'all' || card.dataset.category === cat;
    card.classList.toggle('tc-hidden', !show);
  });
}

// Initialize App
window.onload = () => {
  renderSidebar();
  renderQuickGrid();
  initAnalyzer();
  renderTenses();
  switchView('dashboard');
};
