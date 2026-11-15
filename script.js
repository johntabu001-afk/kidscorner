
    const contactForm = document.getElementById("contact-form");
    const formStatus = document.getElementById("form-status");
    let popupTimeout;

    if (contactForm && formStatus) {
      contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        formStatus.textContent = "Data Submitted successfully.";
        Object.assign(formStatus.style, {
          display: "block",
          position: "fixed",
          bottom: "24px",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "14px 24px",
          borderRadius: "8px",
          backgroundColor: "#091fe6",
          color: "#ffffff",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
          zIndex: "1000"
        });

        window.clearTimeout(popupTimeout);
        popupTimeout = window.setTimeout(() => {
          formStatus.textContent = "";
          formStatus.style.display = "none";
        }, 3000);
      });
    }

    const categorySelect = document.getElementById("story-category");
    const storyCards = document.querySelectorAll(".story-card[data-story-category]");
    const noStoriesMessage = document.getElementById("no-stories-message");

    if (categorySelect) {
      categorySelect.addEventListener("change", () => {
        const selectedCategory = categorySelect.value;
        let visibleStories = 0;

        storyCards.forEach((story) => {
          const isVisible = selectedCategory === "all" ||
            story.dataset.storyCategory === selectedCategory;
          story.hidden = !isVisible;
          if (isVisible) {
            visibleStories += 1;
          }
        });

        if (noStoriesMessage) {
          noStoriesMessage.hidden = visibleStories > 0;
        }
      });
    }
    
    