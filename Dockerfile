FROM ubuntu:22.10

LABEL authors="Vinicius Rech"
LABEL repository="node"
LABEL tag="18.16.0"
LABEL version="v1.0"

RUN apt update && \
    apt install -y -q --no-install-recommends npm \
    curl \
    xz-utils \
    gconf-service \
    libgbm-dev \
    libasound2 \
    libatk1.0-0 \
    libc6 \
    libcairo2 \
    libcups2 \
    libdbus-1-3 \
    libexpat1 \
    libfontconfig1 \
    libgcc1 \
    libgconf-2-4 \
    libgdk-pixbuf2.0-0 \
    libglib2.0-0 \
    libgtk-3-0 \
    libnspr4 \
    libpango-1.0-0 \
    libpangocairo-1.0-0 \
    libstdc++6 \
    libx11-6 \
    libx11-xcb1 \
    libxcb1 \
    libxcomposite1 \
    libxcursor1 \
    libxdamage1 \
    libxext6 \
    libxfixes3 \
    libxi6 \
    libxrandr2 \
    libxrender1 \
    libxss1 \
    libxtst6 \
    ca-certificates \
    fonts-liberation \
    libappindicator1 \
    libnss3 \
    lsb-release \
    xdg-utils \
    wget && rm -rf /var/lib/apt/lists/*

COPY src /app/src

WORKDIR /app/src

RUN wget https://nodejs.org/dist/v18.16.0/node-v18.16.0-linux-x64.tar.xz

RUN mkdir -p /usr/local/lib/nodejs && \
    tar -xJvf node-v18.16.0-linux-x64.tar.xz -C /usr/local/lib/nodejs && \
    echo 'export PATH=/usr/local/lib/nodejs/node-18.16.0-linux-x64/bin:$PATH' >> ~/.bashrc

RUN npm install

CMD ["npm", "run", "dev"]
