---
title: Jellyfin on proxmox
description: Trying jellyfin on proxmox with media on the NAS.
date: 2024-05-03T01:00:00.000Z
image: https://cdn.pixabay.com/photo/2015/07/17/22/42/library-849797_1280.jpg
badge:
  label: Proxmox
authors:
  - name: Miguel
    to: https://github.com/miggi92
    avatar:
      src: https://github.com/miggi92.png
---

# Jellyfin on proxmox

Currently I'm using Plex running directly on my NAS for my media lib. But I heard good things about jellyfin and wanted to evaluate it.

I found a lot of YouTube videos using plex and jellyfin simultaneous.

## Installation Guide

### Installation

The quickest way to install jellyfin is using the proxmox scripts from "tteck" -> [Proxmox Helper-Scripts](https://tteck.github.io/Proxmox/).

### Adding IP to Ngnix proxy manager (optional)

Within my home network I usually access every service with a domain name. Therefore, I use the nginx proxy manager.

The settings for jellyfin can be found in the jellyfin documentation unter: [Nginx | Jellyfin](https://jellyfin.org/docs/general/networking/nginx/#nginx-proxy-manager)

### Mounting NAS as samba share

For this configuration I found a useful guide from "Jims Garage" -> [Nas config](https://github.com/JamesTurland/JimsGarage/tree/main/LXC/NAS). Additionally, we also have to add the "jellyfin" user to the lxc\_share group.

```bash
usermod -a -G lxc_shares jellyfin
```

### Configuration

After the nas was mounted to proxmox and shared with the LXC, we can config our media library. Just add the videos/music paths of your nas. If you have done everything correctly then the folders will be shown correctly in the lib settings.

Example:

![jellyfin\_lib.png](/blog/jellyfin_lib.png)

## Link references

- Post picture: <https://cdn.pixabay.com/photo/2015/07/17/22/42/library-849797_1280.jpg>
