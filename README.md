# coding-one---MingquanYang-22003678
Portraits of Trans Lives： I am Me
In spite of national and international protections, transsexuals have been a neglected community worldwide. Baring few countries, there is no recognition of their rights（Bachchhav, 2018）.Transgender individuals still struggle to become an effective subject of discussion. Many people, when discussing their living conditions, have never even encountered individuals with diverse gender identities and transgender experiences in real life. The difficulties faced by the transgender community in private settings and the violence they endure in public spaces are not only challenging to articulate but even more challenging to be heard and convincing (Queer Squad, 2023).

Hence, I aim to create an interactive generative art project: with each click, it will randomly generate different portraits of transgender individuals. When clicking on each small avatar, a dialogue box will appear, and the voice will narrate the personal experiences of transgender individuals. Through this project, I hope to provide people with an opportunity to see and hear their voices.

In the preliminary research phase of the project, I delved into literature on transgender health and self-identity, gaining a deep understanding of the characteristics of the transgender community, including their types, gender identity, gender expression, methods of gender transition, and living conditions. I referred to various sources such as "Transgender people: health at the margins of society," "Gender identity, gender expression and sex characteristics act," and collected narratives from 21 transgender individuals online.

The Gender Identity, Gender Expression and Sex Characteristics Act (Act N A, 2015) asserts that the physiological gender of humans is random, and the psychological gender identity and gender expression of transgender individuals are diverse. Therefore, by creating a "Human" class, instantiating multiple human objects, and drawing several sets of facial features, makeup, and hairstyles with different gender characteristics placed in the index, I used random functions to combine appearance features randomly. The facial features were drawn using arrays, graphic functions, noise functions, map functions, and quadratic Bezier curves to arrange facial features neatly using nested loop functions.

Next, according to the data from the China Transgender Health Research Report (Legal Daily, 2020), over 50.8% of transgender individuals have experienced physical violence, domestic violence, and sexual violence in actual situations. Therefore, I created bandages and gradient red wounds, using probability functions to make them appear 50% of the time in the middle of the nose bridge and mouth corners.

It is worth noting that the mental health of the transgender community is less optimistic, often facing psychological abuse, depression, anxiety, and suicidal thoughts (McCann & Sharek, 2016). Therefore, their attention and scrutiny towards the public are heightened. I created a gaze-following effect using the map mapping function, making their gaze closely follow the user's mouse movements, expressing the sensitivity of the transgender community to public attention.

Finally, I used a p5.Speech object for speech synthesis. By calculating the distance between the mouse click position and the center of the character object using the dist function, the detectClicked method detects whether the character object is clicked. Conditional statements control the start and stop of speech synthesis, ensuring the display and closure of text. The mouseClicked function allows the appearance of a text box, transgender individuals' narratives, and speech synthesis when the mouse clicks on a character. Through these functions and logic, the design allows users to interact with the page by clicking on characters, triggering speech synthesis and text display. This design enables users to interact with the characters, listen to and understand the narratives of transgender individuals, and learn about their experiences and inner worlds.


References:

Queer Squad. 2023. "Transgender Visibility Day: Let's rethink what it means to be 'human'." China Digital Times. [Online] Available at: https://chinadigitaltimes.net/chinese/694744.html (Accessed: 04/08/2023).


Winter S, Diamond M, Green J, et al. Transgender people: health at the margins of society[J]. The Lancet, 2016, 388(10042): 390-400.

Beemyn G, Rankin S. The lives of transgender people[M]. Columbia University Press, 2011.

Act N A. Gender Identity, Gender Expression and Sex Characteristics Act[J]. 2015.

Bachchhav S. Discrimination and dilemma of transgender people[J]. International Journal of Research in Social Sciences, 2018, 8(10): 454-459.

Available at: https://cnlgbtdata.com/files/uploads/2023/01/2021%E5%85%A8%E5%9B%BD%E8%B7%A8%E6%80%A7%E5%88%AB%E5%81%A5%E5%BA%B7%E8%B0%83%E7%A0%94%E6%8A%A5%E5%91%8A.pdf (Accessed: 2020-02-22).

McCann E, Sharek D. Mental health needs of people who identify as transgender: A review of the literature[J]. Archives of psychiatric nursing, 2016, 30(2): 280-285.

