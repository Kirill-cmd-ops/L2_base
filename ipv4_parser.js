function ipv4Parser(ip, mask) {
    const ipOctets = ip.split('.').map(Number);
    const maskOctets = mask.split('.').map(Number);

    const networkBlock = ipOctets.map((octet, i) => octet & maskOctets[i]);

    const hostIdentifier = ipOctets.map((octet, i) => octet ^ networkBlock[i]);

    return [networkBlock.join('.'), hostIdentifier.join('.')];
}