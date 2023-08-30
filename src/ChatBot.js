import { useEffect, useState } from 'react';

async function getData({ prompt, systemRole }) {
  try {
    const gptResponse = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: systemRole,
            },
            {
              role: "user",
              content: prompt,
            },
          ],
        }),
      }
    );
    const response = await gptResponse.json();
    return response["choices"][0]["message"]["content"];
  } catch (error) {
    throw error;
  }
}

function useChatbot(finalUserInput, finalSystemRole, regenerateCount) {
  const [output, setOutput] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getData({
          prompt: finalUserInput,
          systemRole: finalSystemRole
        });
        setOutput(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, [finalUserInput, finalSystemRole, regenerateCount]);

  return { output, isLoading };
}

export default useChatbot;