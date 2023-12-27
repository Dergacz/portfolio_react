export const yearsCount = (dateStr: string): number => {
  const startDate = new Date(dateStr);
  const currentDate = new Date();

  let years = currentDate.getFullYear() - startDate.getFullYear();
  const isBirthdayPassedThisYear = currentDate.getMonth() > startDate.getMonth() ||
    (currentDate.getMonth() === startDate.getMonth() && currentDate.getDate() >= startDate.getDate());

  if (!isBirthdayPassedThisYear) {
    years--;
  }

  return years;
}