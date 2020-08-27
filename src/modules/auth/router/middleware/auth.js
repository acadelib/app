export default function auth({ next, store }) {
  if (store.getters.isAuthenticated) {
    return next();
  }

  return next({ name: "login" });
}
