const CONTACT_EMAILS = {
  main: ['ajay@ajayzhimire.app'],
  hamroFoolbari: 'ajay@ajayzhimire.app',
  hungerRsvp: ['UniqueTMFrisco@gmail.com', 'ajay@ajayzhimire.app'],
};

function buildMailto(recipients, { subject } = {}) {
  const to = Array.isArray(recipients) ? recipients.join(',') : recipients;
  if (!subject) {
    return `mailto:${to}`;
  }
  return `mailto:${to}?subject=${encodeURIComponent(subject)}`;
}

const CONTACT_MAILTO = {
  main: buildMailto(CONTACT_EMAILS.main),
  hamroFoolbari: buildMailto(CONTACT_EMAILS.hamroFoolbari),
  hungerRsvp: buildMailto(CONTACT_EMAILS.hungerRsvp, {
    subject: 'RSVP - Hunger in North Texas Event',
  }),
};

export { CONTACT_EMAILS, CONTACT_MAILTO };
