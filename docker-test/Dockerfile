FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

ENV ASPNETCORE_URLS=http://+:80

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["docker-test.csproj", "./"]
RUN dotnet restore "docker-test.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "docker-test.csproj" -r linux-arm -c Release -o /app/build -p:UseAppHost=false --no-restore
RUN apt-get update && \
    apt-get install -y wget && \
    apt-get install -y gnupg2 && \
    wget -q0 https://deb.nodesource.com/setup_10.x | bash  - && \
    apt-get install -y build-essential nodejs && \
    apt-get install -y npm
FROM build AS publish
RUN dotnet publish "docker-test.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "docker-test.dll"]
