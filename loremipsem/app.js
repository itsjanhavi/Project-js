const text = [
    `Cultivating Inner Peace: Within the sanctuary of inner beauty lies a profound sense of peace and tranquility. This inner peace emanates from a deep acceptance of oneself and a harmonious alignment with the world around us. Through practices such as mindfulness, meditation, and self-reflection, individuals can cultivate a sense of inner calm that transcends external circumstances.`,

    `Nurturing Self-Expression: The beauty within thrives on self-expression and creative exploration. By embracing our passions, talents, and unique perspectives, we unlock the potential for profound self-discovery and personal growth. Whether through art, music, writing, or other forms of creative expression, individuals can channel their inner beauty into tangible manifestations that enrich their lives and inspire others.`,

    `Fostering Resilience: Inner beauty serves as a source of resilience in the face of adversity. It empowers individuals to navigate life's challenges with grace, courage, and optimism. By drawing strength from their inner resources and cultivating a positive mindset, individuals can overcome obstacles, bounce back from setbacks, and emerge stronger and more resilient than before.`,

    `Building Meaningful Connections: The beauty within forms the basis for authentic connections and meaningful relationships. When individuals embrace their true selves and express genuine kindness, compassion, and empathy towards others, they foster deep and meaningful connections that transcend superficiality and foster a sense of belonging and community.`,

    `Embracing Imperfection: Inner beauty embraces imperfection and celebrates the inherent humanity of individuals. It recognizes that true beauty lies not in flawlessness, but in authenticity, vulnerability, and the courage to embrace one's imperfections. By embracing and accepting our flaws and shortcomings, we cultivate a sense of self-love and self-compassion that allows us to fully appreciate our unique beauty and worth.`,

    `Spreading Joy and Inspiration: The beauty within has the power to spread joy and inspiration to those around us. By radiating positivity, kindness, and optimism, individuals can uplift others and create ripple effects of positivity that reverberate throughout their communities and beyond. Through acts of kindness, generosity, and service, individuals can harness the transformative power of inner beauty to make a positive impact on the world.`,

    `Sanctuary of Beauty: In the midst of the chaotic world, there exists a tranquil sanctuary where the genuine essence of beauty dwells. This serene place is characterized by the harmonious interplay of nature's elements – the gentle rustle of leaves in the breeze, the delicate fragrance of flowers in bloom, and the warm caress of sunlight filtering through the trees.`,

    `Embracing Imperfection: Inner beauty embraces imperfection and celebrates the inherent humanity of individuals. It recognizes that true beauty lies not in flawlessness, but in authenticity, vulnerability, and the courage to embrace one's imperfections. By embracing and accepting our flaws and shortcomings, we cultivate a sense of self-love and self-compassion that allows us to fully appreciate our unique beauty and worth.`,

    `Spreading Joy and Inspiration: The beauty within has the power to spread joy and inspiration to those around us. By radiating positivity, kindness, and optimism, individuals can uplift others and create ripple effects of positivity that reverberate throughout their communities and beyond. Through acts of kindness, generosity, and service, individuals can harness the transformative power of inner beauty to make a positive impact on the world.`,

    `Sanctuary of Beauty: In the midst of the chaotic world, there exists a tranquil sanctuary where the genuine essence of beauty dwells. This serene place is characterized by the harmonious interplay of nature's elements – the gentle rustle of leaves in the breeze, the delicate fragrance of flowers in bloom, and the warm caress of sunlight filtering through the trees.`,
    
    `Nurturing Self-Expression: The beauty within thrives on self-expression and creative exploration. By embracing our passions, talents, and unique perspectives, we unlock the potential for profound self-discovery and personal growth. Whether through art, music, writing, or other forms of creative expression, individuals can channel their inner beauty into tangible manifestations that enrich their lives and inspire others.`,

    `Fostering Resilience: Inner beauty serves as a source of resilience in the face of adversity. It empowers individuals to navigate life's challenges with grace, courage, and optimism. By drawing strength from their inner resources and cultivating a positive mindset, individuals can overcome obstacles, bounce back from setbacks, and emerge stronger and more resilient than before.`,

    `Building Meaningful Connections: The beauty within forms the basis for authentic connections and meaningful relationships. When individuals embrace their true selves and express genuine kindness, compassion, and empathy towards others, they foster deep and meaningful connections that transcend superficiality and foster a sense of belonging and community.`,

];

const form = document.querySelector('.lorem-form');
const amount = document.querySelector("#amount");
const result = document.querySelector(".lorem-text");

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const value = parseInt(amount.value);

    if (isNaN(value) || value <= 0 || value > text.length) {
        result.innerHTML = '';
    } else {
        let tempText = '';
        for (let i = 0; i < value; i++) {
            const randomIndex = Math.floor(Math.random() * text.length);
            tempText += `<p class="result">${text[randomIndex]}</p>`;
        }
        result.innerHTML = tempText;
    }
});