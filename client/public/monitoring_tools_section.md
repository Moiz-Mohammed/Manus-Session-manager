## Monitoring and Logging

### Prometheus

#### Official Documentation
- **URL**: [Prometheus Documentation](https://prometheus.io/docs/introduction/overview/)
- **Description**: The official documentation for Prometheus, an open-source systems monitoring and alerting toolkit originally built at SoundCloud.
- **Content Covered**:
  - Prometheus concepts and architecture
  - Installation and configuration
  - Data model and metrics types
  - PromQL query language
  - Alerting and rules
  - Storage and federation
  - Integration with visualization tools
  - Service discovery

#### Key Learning Sections
- [Overview](https://prometheus.io/docs/introduction/overview/) - Core concepts and architecture
- [Getting Started](https://prometheus.io/docs/prometheus/latest/getting_started/) - Installation and basic setup
- [Prometheus Server](https://prometheus.io/docs/prometheus/latest/configuration/configuration/) - Server configuration
- [PromQL](https://prometheus.io/docs/prometheus/latest/querying/basics/) - Query language reference

#### Beginner Tutorials
- [First Steps with Prometheus](https://prometheus.io/docs/introduction/first_steps/) - Basic setup and usage
- [Prometheus Up & Running](https://www.oreilly.com/library/view/prometheus-up/9781492034131/) - Comprehensive book
- [Prometheus for Beginners](https://itnext.io/prometheus-for-beginners-5f20c2e89b6c) - Introductory guide
- [Prometheus Workshop](https://github.com/yolossn/Prometheus-Basics) - Hands-on examples

#### Advanced Topics
- [Federation](https://prometheus.io/docs/prometheus/latest/federation/) - Scaling Prometheus
- [Storage](https://prometheus.io/docs/prometheus/latest/storage/) - Understanding the storage layer
- [Remote Write/Read](https://prometheus.io/docs/operating/integrations/#remote-endpoints-and-storage) - Long-term storage integration
- [Service Discovery](https://prometheus.io/docs/prometheus/latest/configuration/configuration/#scrape_config) - Dynamic target discovery

#### Community Resources
- [Prometheus GitHub](https://github.com/prometheus/prometheus) - Source code and issues
- [Prometheus Community](https://prometheus.io/community/) - Mailing lists and chat
- [PromCon](https://promcon.io/) - Prometheus conference
- [Awesome Prometheus](https://github.com/roaldnefs/awesome-prometheus) - Curated list of resources

### Grafana

#### Official Documentation
- **URL**: [Grafana Documentation](https://grafana.com/docs/)
- **Description**: The official documentation for Grafana, an open-source visualization and analytics software that allows you to query, visualize, alert on, and explore your metrics, logs, and traces.
- **Content Covered**:
  - Grafana concepts and architecture
  - Installation and configuration
  - Dashboard creation and management
  - Data source integration
  - Panel and visualization types
  - Alerting and notifications
  - User management and authentication
  - API and plugins

#### Key Learning Sections
- [Introduction](https://grafana.com/docs/grafana/latest/introduction/) - Overview and concepts
- [Getting Started](https://grafana.com/docs/grafana/latest/getting-started/) - Installation and basic setup
- [Dashboards](https://grafana.com/docs/grafana/latest/dashboards/) - Dashboard creation and management
- [Data Sources](https://grafana.com/docs/grafana/latest/datasources/) - Connecting to data sources

#### Beginner Tutorials
- [Build Your First Dashboard](https://grafana.com/docs/grafana/latest/getting-started/build-first-dashboard/) - Step-by-step guide
- [Grafana Fundamentals](https://grafana.com/tutorials/grafana-fundamentals/) - Core concepts tutorial
- [Grafana University](https://grafana.com/videos/) - Video tutorials
- [Grafana Labs Webinars](https://grafana.com/videos/webinars/) - Educational webinars

#### Advanced Topics
- [Grafana Alerting](https://grafana.com/docs/grafana/latest/alerting/) - Setting up alerts
- [Grafana Provisioning](https://grafana.com/docs/grafana/latest/administration/provisioning/) - Automating setup
- [Grafana API](https://grafana.com/docs/grafana/latest/developers/http_api/) - REST API reference
- [Grafana Plugins](https://grafana.com/docs/grafana/latest/developers/plugins/) - Extending Grafana

#### Community Resources
- [Grafana GitHub](https://github.com/grafana/grafana) - Source code and issues
- [Grafana Community](https://community.grafana.com/) - Forums and discussions
- [Grafana Labs Blog](https://grafana.com/blog/) - Latest news and tutorials
- [Grafana Slack](https://slack.grafana.com/) - Community chat

### Integration: Prometheus and Grafana

#### Official Documentation
- **URL**: [Grafana Prometheus Data Source](https://grafana.com/docs/grafana/latest/datasources/prometheus/)
- **Description**: Documentation on how to integrate Prometheus as a data source in Grafana for visualization and dashboarding.
- **Content Covered**:
  - Setting up Prometheus as a data source in Grafana
  - Query editor features
  - Template variables
  - Alerting with Prometheus data
  - Dashboard examples

#### Key Learning Sections
- [Configuration](https://grafana.com/docs/grafana/latest/datasources/prometheus/#configure-the-data-source) - Setting up the connection
- [Query Editor](https://grafana.com/docs/grafana/latest/datasources/prometheus/#query-editor) - Writing PromQL queries in Grafana
- [Template Variables](https://grafana.com/docs/grafana/latest/datasources/prometheus/#templating) - Dynamic dashboards
- [Alerting](https://grafana.com/docs/grafana/latest/datasources/prometheus/#alerting) - Setting up alerts

#### Beginner Tutorials
- [Get Started with Grafana and Prometheus](https://grafana.com/docs/grafana/latest/getting-started/get-started-grafana-prometheus/) - Official tutorial
- [Monitoring with Prometheus and Grafana](https://prometheus.io/docs/visualization/grafana/) - Prometheus perspective
- [Prometheus Monitoring with Grafana](https://grafana.com/grafana/dashboards/1860-node-exporter-full/) - Popular dashboard example
- [Kubernetes Monitoring with Prometheus and Grafana](https://github.com/kubernetes/kube-state-metrics) - Kubernetes integration

#### Advanced Topics
- [Recording Rules](https://prometheus.io/docs/prometheus/latest/configuration/recording_rules/) - Pre-computed expressions
- [Federation](https://prometheus.io/docs/prometheus/latest/federation/) - Scaling monitoring
- [High Availability](https://grafana.com/docs/grafana/latest/setup-grafana/set-up-ha/) - Redundant setup
- [Metrics Exploration](https://grafana.com/docs/grafana/latest/explore/) - Ad-hoc querying

#### Community Resources
- [Grafana Dashboard Repository](https://grafana.com/grafana/dashboards/) - Pre-built dashboards
- [Awesome Prometheus Alerts](https://awesome-prometheus-alerts.grep.to/) - Alert rule examples
- [Prometheus Operator](https://github.com/prometheus-operator/prometheus-operator) - Kubernetes native deployment
- [Community Forums](https://community.grafana.com/c/support/prometheus/45) - Help and discussions
