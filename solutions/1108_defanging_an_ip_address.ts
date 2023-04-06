function defangIPaddr(address: string): string {
  let sArr = address.split('.');
  return sArr.join('[.]');
}

function defangIPaddr(address: string): string {
  if (typeof address !== 'string') {
    return;
  }
  return address.split('.').join('[.]');
}

function defangIPaddr(address: string): string {
  return address.split('.').join('[.]');
}
