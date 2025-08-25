import { useEffect } from "react";
export default function DescriptionSection(){
  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
    );
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return(
    <div className="section1">
      <div className='container'> 
        <header className='Header'>
          How SkillSwap Works
        </header>
        <div className='card-container'>
          <div className='card'>
            <div className='card-icon'>
              <div className='icon'>🔎</div>
            </div>
            <div className='card-title'>Discover Skills</div>
            <div className='card-text'>Easily find and connect with experts across various domains, ready to share their knowledge and passion.</div>
          </div>
          <div className='card'>
            <div className='card-icon'>
              <div className='icon'>🤝</div>
            </div>
            <div className='card-title'>Exchange Skills</div>
            <div className='card-text'>Share your expertise and learn from others in a collaborative environment.</div>
          </div>
          <div className='card'>
            <div className='card-icon'>
              <div className='icon'>🚀</div>
            </div>
            <div className='card-title'>Grow Together</div>
            <div className='card-text'>Build lasting connections and expand your skillset for personal and professional growth.</div>
          </div>
        </div>
        <div className="Footer">
          <p>© 2025 SkillSwap. All rights reserved.</p>
          <p>Follow us on social media: Facebook | Twitter | Instagram</p>
        </div>
      </div>
    </div>
  )
}