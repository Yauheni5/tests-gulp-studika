export const loadCities = async () => {
  try {
    const response = await fetch("https://studika.ru/api/areas", {
      method: "POST",
    });

    return await response.json();
  } catch (error) {
    console.error("error: ", error);
    return [];
  }
};
