export const getLocalDate = (date = new Date()) => {
  const offset = date.getTimezoneOffset() * 60_000;
  return new Date(date.getTime() - offset).toISOString().slice(0, 10);
};

export const getInitialService = (requestedService, services) =>
  services.some((service) => service.slug === requestedService)
    ? requestedService
    : "";
