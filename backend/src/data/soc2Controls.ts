export interface PointOfFocus {
  id: string;
  title: string;
  description: string;
}

export interface Criterion {
  id: string;
  categoryCode: string;
  title: string;
  description: string;
  pointsOfFocus: PointOfFocus[];
}

export interface Category {
  code: string;
  name: string;
  description: string;
  criteria: Criterion[];
}

export interface Soc2Catalog {
  version: string;
  categories: Category[];
}

export const catalog: Soc2Catalog = {
  version: 'TSC 2017',
  categories: [
    {
      code: 'CC1',
      name: 'Control Environment',
      description: 'The control environment sets the tone of the organization, influencing the control consciousness of its people. It is the foundation for all other components of internal control.',
      criteria: [
        {
          id: 'CC1.1',
          categoryCode: 'CC1',
          title: 'COSO Principle 1: Demonstrates Commitment to Integrity and Ethical Values',
          description: 'The entity demonstrates a commitment to integrity and ethical values.',
          pointsOfFocus: [
            { id: 'CC1.1-POF1', title: 'Sets the Tone at the Top', description: 'Management and the board of directors demonstrate a commitment to integrity and ethical values through their directives, actions, and behavior.' },
            { id: 'CC1.1-POF2', title: 'Establishes Standards of Conduct', description: 'Expectations of the board of directors and senior management concerning integrity and ethical values are defined in the entity\'s standards of conduct and understood at all levels.' },
            { id: 'CC1.1-POF3', title: 'Evaluates Adherence to Standards of Conduct', description: 'Processes are in place to evaluate the performance of individuals and teams against the entity\'s expected standards of conduct.' },
            { id: 'CC1.1-POF4', title: 'Addresses Deviations in a Timely Manner', description: 'Deviations from expected standards of conduct are identified and remediated in a timely and consistent manner.' },
          ],
        },
        {
          id: 'CC1.2',
          categoryCode: 'CC1',
          title: 'COSO Principle 2: Exercises Oversight Responsibility',
          description: 'The board of directors demonstrates independence from management and exercises oversight of the development and performance of internal control.',
          pointsOfFocus: [
            { id: 'CC1.2-POF1', title: 'Establishes Oversight Responsibilities', description: 'The board of directors identifies and accepts its oversight responsibilities in relation to established requirements and expectations.' },
            { id: 'CC1.2-POF2', title: 'Applies Relevant Expertise', description: 'The board of directors defines, maintains, and periodically evaluates the skills and expertise needed among its members to enable them to ask probing questions of senior management.' },
            { id: 'CC1.2-POF3', title: 'Operates Independently', description: 'The board of directors has sufficient members who are independent from management and objective in evaluations and decision-making.' },
            { id: 'CC1.2-POF4', title: 'Provides Oversight of the System of Internal Control', description: 'The board of directors retains oversight responsibility for management\'s design, implementation, and conduct of internal control.' },
          ],
        },
        {
          id: 'CC1.3',
          categoryCode: 'CC1',
          title: 'COSO Principle 3: Establishes Structure, Authority, and Responsibility',
          description: 'Management establishes, with board oversight, structures, reporting lines, and appropriate authorities and responsibilities in the pursuit of objectives.',
          pointsOfFocus: [
            { id: 'CC1.3-POF1', title: 'Considers All Structures of the Entity', description: 'Management and the board of directors consider the multiple structures used (including operating and legal entity structures) to support the achievement of objectives.' },
            { id: 'CC1.3-POF2', title: 'Establishes Reporting Lines', description: 'Management designs and evaluates lines of reporting for each entity structure to enable execution of authorities and responsibilities and flow of information to manage the activities of the entity.' },
            { id: 'CC1.3-POF3', title: 'Defines, Assigns, and Limits Authorities and Responsibilities', description: 'Management and the board of directors delegate authority, define responsibilities, and use appropriate processes and technology to assign responsibilities and segregate duties as necessary.' },
          ],
        },
        {
          id: 'CC1.4',
          categoryCode: 'CC1',
          title: 'COSO Principle 4: Demonstrates Commitment to Competence',
          description: 'The entity demonstrates a commitment to attract, develop, and retain competent individuals in alignment with objectives.',
          pointsOfFocus: [
            { id: 'CC1.4-POF1', title: 'Establishes Policies and Practices', description: 'Policies and practices reflect expectations of competence necessary to support the achievement of objectives.' },
            { id: 'CC1.4-POF2', title: 'Evaluates Competence and Addresses Shortcomings', description: 'The board of directors and management evaluate competence across the entity and in outsourced service providers, and address shortcomings as appropriate.' },
            { id: 'CC1.4-POF3', title: 'Attracts, Develops, and Retains Individuals', description: 'The entity provides the mentoring and training needed to attract, develop, and retain sufficient and competent personnel and outsourced service providers.' },
            { id: 'CC1.4-POF4', title: 'Plans and Prepares for Succession', description: 'Senior management and the board of directors develop contingency plans for assignments of responsibility important for internal control.' },
          ],
        },
        {
          id: 'CC1.5',
          categoryCode: 'CC1',
          title: 'COSO Principle 5: Enforces Accountability',
          description: 'The entity holds individuals accountable for their internal control responsibilities in the pursuit of objectives.',
          pointsOfFocus: [
            { id: 'CC1.5-POF1', title: 'Enforces Accountability Through Structures, Authorities, and Responsibilities', description: 'Management and the board of directors establish the mechanisms to communicate and hold individuals accountable for performance of internal control responsibilities across the entity.' },
            { id: 'CC1.5-POF2', title: 'Establishes Performance Measures, Incentives, and Rewards', description: 'Management and the board of directors establish performance measures, incentives, and other rewards appropriate for responsibilities at all levels of the entity.' },
            { id: 'CC1.5-POF3', title: 'Evaluates Performance Measures, Incentives, and Rewards for Ongoing Relevance', description: 'Management and the board of directors align incentives and rewards with the fulfillment of internal control responsibilities in the achievement of objectives.' },
            { id: 'CC1.5-POF4', title: 'Considers Excessive Pressures', description: 'Management and the board of directors evaluate and adjust pressures associated with the achievement of objectives as they relate to establishing, implementing, and maintaining the system of internal control.' },
          ],
        },
      ],
    },
    {
      code: 'CC2',
      name: 'Communication and Information',
      description: 'The entity obtains or generates and uses relevant, quality information to support the functioning of internal control, and communicates internally and externally to support the achievement of objectives.',
      criteria: [
        {
          id: 'CC2.1',
          categoryCode: 'CC2',
          title: 'COSO Principle 13: Uses Relevant Information',
          description: 'The entity obtains or generates and uses relevant, quality information to support the functioning of other components of internal control.',
          pointsOfFocus: [
            { id: 'CC2.1-POF1', title: 'Identifies Information Requirements', description: 'A process is in place to identify the information required and expected to support the functioning of the other components of internal control and the achievement of the entity\'s objectives.' },
            { id: 'CC2.1-POF2', title: 'Captures Internal and External Sources of Data', description: 'Information systems capture internal and external sources of data.' },
            { id: 'CC2.1-POF3', title: 'Processes Relevant Data Into Information', description: 'Information systems process and transform relevant data into information.' },
            { id: 'CC2.1-POF4', title: 'Maintains Quality Throughout Processing', description: 'Information systems produce information that is timely, current, accurate, complete, accessible, protected, verifiable, and retained.' },
          ],
        },
        {
          id: 'CC2.2',
          categoryCode: 'CC2',
          title: 'COSO Principle 14: Communicates Internally',
          description: 'The entity internally communicates information, including objectives and responsibilities for internal control, necessary to support the functioning of internal control.',
          pointsOfFocus: [
            { id: 'CC2.2-POF1', title: 'Communicates Internal Control Information', description: 'A process is in place to communicate required information to enable all personnel to understand and carry out their internal control responsibilities.' },
            { id: 'CC2.2-POF2', title: 'Communicates With the Board of Directors', description: 'Communication exists between management and the board of directors so that both have information needed to fulfill their roles with respect to the entity\'s objectives.' },
            { id: 'CC2.2-POF3', title: 'Provides Separate Communication Lines', description: 'Separate communication channels, such as whistle-blower hotlines, are in place as a means for anonymous or confidential communication when normal channels are inoperative or ineffective.' },
            { id: 'CC2.2-POF4', title: 'Selects Relevant Method of Communication', description: 'The method of communication considers the timing, audience, and nature of the information.' },
          ],
        },
        {
          id: 'CC2.3',
          categoryCode: 'CC2',
          title: 'COSO Principle 15: Communicates Externally',
          description: 'The entity communicates with external parties regarding matters affecting the functioning of other components of internal control.',
          pointsOfFocus: [
            { id: 'CC2.3-POF1', title: 'Communicates to External Parties', description: 'Processes are in place to communicate relevant and timely information to external parties, including shareholders, partners, owners, regulators, customers, financial analysts, and other external parties.' },
            { id: 'CC2.3-POF2', title: 'Enables Inbound Communications', description: 'Open communication channels allow input from customers, consumers, suppliers, external auditors, regulators, financial analysts, and others providing significant information.' },
            { id: 'CC2.3-POF3', title: 'Communicates With the Board of Directors', description: 'Relevant information resulting from assessments conducted by external parties is communicated to the board of directors.' },
            { id: 'CC2.3-POF4', title: 'Selects Relevant Method of Communication', description: 'The method of communication considers the timing, audience, and nature of the communication and legal, regulatory, and fiduciary requirements and expectations.' },
          ],
        },
      ],
    },
    {
      code: 'CC3',
      name: 'Risk Assessment',
      description: 'The entity identifies and analyzes risk to the achievement of its objectives as a basis for determining how those risks should be managed, including risk of fraud.',
      criteria: [
        {
          id: 'CC3.1',
          categoryCode: 'CC3',
          title: 'COSO Principle 6: Specifies Suitable Objectives',
          description: 'The entity specifies objectives with sufficient clarity to enable the identification and assessment of risks relating to objectives.',
          pointsOfFocus: [
            { id: 'CC3.1-POF1', title: 'Reflects Management\'s Choices', description: 'Operations objectives reflect management\'s choices about structure, industry considerations, and performance of the entity.' },
            { id: 'CC3.1-POF2', title: 'Considers Tolerances for Risk', description: 'Management considers the acceptable levels of variation relative to the achievement of operations objectives.' },
            { id: 'CC3.1-POF3', title: 'Includes Operations and Financial Performance Goals', description: 'The accuracy and completeness of financial reporting objectives are consistent with accounting principles suitable and available for that entity.' },
            { id: 'CC3.1-POF4', title: 'Forms a Basis for Committing of Resources', description: 'Management uses the entity\'s objectives as a basis for allocating resources needed to achieve desired results.' },
          ],
        },
        {
          id: 'CC3.2',
          categoryCode: 'CC3',
          title: 'COSO Principle 7: Identifies and Analyzes Risk',
          description: 'The entity identifies risks to the achievement of its objectives across the entity and analyzes risks as a basis for determining how the risks should be managed.',
          pointsOfFocus: [
            { id: 'CC3.2-POF1', title: 'Includes Entity, Subsidiary, Division, Operating Unit, and Functional Levels', description: 'The entity identifies and assesses risks at the entity, subsidiary, division, operating unit, and functional levels relevant to the achievement of objectives.' },
            { id: 'CC3.2-POF2', title: 'Analyzes Internal and External Factors', description: 'Risk identification considers both internal and external factors and their impact on the achievement of objectives.' },
            { id: 'CC3.2-POF3', title: 'Involves Appropriate Levels of Management', description: 'Appropriate levels of management are involved in evaluating the likelihood and impact of identified risks, determining how risks should be managed, and deciding actions to be taken.' },
            { id: 'CC3.2-POF4', title: 'Estimates Significance of Risks Identified', description: 'Identified risks are analyzed through a process that includes estimating the potential significance of the risk.' },
            { id: 'CC3.2-POF5', title: 'Determines How to Respond to Risks', description: 'Risk assessment includes considering how the risk should be managed, and whether to accept, avoid, reduce, or share the risk.' },
          ],
        },
        {
          id: 'CC3.3',
          categoryCode: 'CC3',
          title: 'COSO Principle 8: Assesses Fraud Risk',
          description: 'The entity considers the potential for fraud in assessing risks to the achievement of objectives.',
          pointsOfFocus: [
            { id: 'CC3.3-POF1', title: 'Considers Various Types of Fraud', description: 'The assessment of fraud considers fraudulent reporting, possible loss of assets, and corruption resulting from the various ways that fraud and misconduct can occur.' },
            { id: 'CC3.3-POF2', title: 'Assesses Incentive and Pressures', description: 'The risk assessment considers incentives and pressures.' },
            { id: 'CC3.3-POF3', title: 'Assesses Opportunities', description: 'The risk assessment considers opportunities for unauthorized acquisition, use, or disposal of assets, altering the entity\'s reporting records, or committing other inappropriate acts.' },
            { id: 'CC3.3-POF4', title: 'Assesses Attitudes and Rationalizations', description: 'The risk assessment considers how management and other personnel might engage in or justify inappropriate actions.' },
          ],
        },
        {
          id: 'CC3.4',
          categoryCode: 'CC3',
          title: 'COSO Principle 9: Identifies and Analyzes Significant Change',
          description: 'The entity identifies and assesses changes that could significantly impact the system of internal control.',
          pointsOfFocus: [
            { id: 'CC3.4-POF1', title: 'Assesses Changes in the External Environment', description: 'The risk identification process considers changes to the regulatory, economic, and physical environment in which the entity operates.' },
            { id: 'CC3.4-POF2', title: 'Assesses Changes in the Business Model', description: 'The entity considers the potential impacts of new business lines, dramatically altered compositions of existing business lines, acquired or divested business operations on the system of internal control.' },
            { id: 'CC3.4-POF3', title: 'Assesses Changes in Leadership', description: 'The entity considers changes in management and respective attitudes and philosophies on the system of internal control.' },
          ],
        },
      ],
    },
    {
      code: 'CC4',
      name: 'Monitoring Activities',
      description: 'The entity selects, develops, and performs ongoing and/or separate evaluations and communicates deficiencies in internal control on a timely basis.',
      criteria: [
        {
          id: 'CC4.1',
          categoryCode: 'CC4',
          title: 'COSO Principle 16: Conducts Ongoing and/or Separate Evaluations',
          description: 'The entity selects, develops, and performs ongoing and/or separate evaluations to ascertain whether the components of internal control are present and functioning.',
          pointsOfFocus: [
            { id: 'CC4.1-POF1', title: 'Considers a Mix of Ongoing and Separate Evaluations', description: 'Management includes a balance of ongoing and separate evaluations.' },
            { id: 'CC4.1-POF2', title: 'Considers Rate of Change', description: 'Management considers the rate of change in business and business processes when selecting and developing separate evaluations.' },
            { id: 'CC4.1-POF3', title: 'Establishes Baseline Understanding', description: 'The design and current state of an internal control system are used to establish a baseline for separate evaluations.' },
            { id: 'CC4.1-POF4', title: 'Uses Knowledgeable Personnel', description: 'Evaluators performing separate evaluations have sufficient knowledge to understand what is being evaluated.' },
          ],
        },
        {
          id: 'CC4.2',
          categoryCode: 'CC4',
          title: 'COSO Principle 17: Evaluates and Communicates Deficiencies',
          description: 'The entity evaluates and communicates internal control deficiencies in a timely manner to those parties responsible for taking corrective action.',
          pointsOfFocus: [
            { id: 'CC4.2-POF1', title: 'Assesses Results', description: 'Management and the board of directors, as appropriate, assess results of ongoing and separate evaluations.' },
            { id: 'CC4.2-POF2', title: 'Communicates Deficiencies', description: 'Deficiencies are communicated to parties responsible for taking corrective action and to management and the board of directors as appropriate.' },
            { id: 'CC4.2-POF3', title: 'Monitors Corrective Actions', description: 'Management tracks whether deficiencies are remediated on a timely basis.' },
          ],
        },
      ],
    },
    {
      code: 'CC5',
      name: 'Control Activities',
      description: 'The entity deploys control activities through policies that establish what is expected and in procedures that put policies into action.',
      criteria: [
        {
          id: 'CC5.1',
          categoryCode: 'CC5',
          title: 'COSO Principle 10: Selects and Develops Control Activities',
          description: 'The entity selects and develops control activities that contribute to the mitigation of risks to the achievement of objectives to acceptable levels.',
          pointsOfFocus: [
            { id: 'CC5.1-POF1', title: 'Integrates With Risk Assessment', description: 'Control activities help ensure that risk responses that address and mitigate risks are carried out.' },
            { id: 'CC5.1-POF2', title: 'Considers Entity-Specific Factors', description: 'Management considers how the environment, complexity, nature, and scope of its operations affect the selection and development of control activities.' },
            { id: 'CC5.1-POF3', title: 'Determines Relevant Business Processes', description: 'Management determines which relevant business processes require control activities.' },
            { id: 'CC5.1-POF4', title: 'Evaluates a Mix of Control Activity Types', description: 'Control activities include a range and variety of controls and may include a balance of approaches to mitigate risks taking into consideration manual and automated controls.' },
          ],
        },
        {
          id: 'CC5.2',
          categoryCode: 'CC5',
          title: 'COSO Principle 11: Selects and Develops General Controls Over Technology',
          description: 'The entity also selects and develops general control activities over technology to support the achievement of objectives.',
          pointsOfFocus: [
            { id: 'CC5.2-POF1', title: 'Determines Dependency Between the Use of Technology in Business Processes and Technology General Controls', description: 'Management understands and determines the dependency and linkage between business processes, automated control activities, and technology general controls.' },
            { id: 'CC5.2-POF2', title: 'Establishes Relevant Technology Infrastructure Control Activities', description: 'Management selects and develops control activities over the technology infrastructure, which are designed and implemented to help ensure the completeness, accuracy, and availability of technology processing.' },
            { id: 'CC5.2-POF3', title: 'Establishes Relevant Security Management Process Controls Activities', description: 'Management selects and develops control activities that are designed and implemented to restrict technology access rights to authorized users commensurate with their job responsibilities.' },
            { id: 'CC5.2-POF4', title: 'Establishes Relevant Technology Acquisition, Development, and Maintenance Process Control Activities', description: 'Management selects and develops control activities over the acquisition, development, and maintenance of technology and its infrastructure to achieve management\'s objectives.' },
          ],
        },
        {
          id: 'CC5.3',
          categoryCode: 'CC5',
          title: 'COSO Principle 12: Deploys Through Policies and Procedures',
          description: 'The entity deploys control activities through policies that establish what is expected and in procedures that put policies into action.',
          pointsOfFocus: [
            { id: 'CC5.3-POF1', title: 'Establishes Policies and Procedures to Support Deployment of Management\'s Directives', description: 'Management establishes control activities that are built into business processes and employees\' day-to-day activities through policies establishing what is expected and relevant procedures specifying actions.' },
            { id: 'CC5.3-POF2', title: 'Establishes Responsibility and Accountability for Executing Policies and Procedures', description: 'Management establishes responsibility and accountability for control activities with management (or other designated personnel) of the business unit or function in which the relevant risks reside.' },
            { id: 'CC5.3-POF3', title: 'Performs in a Timely Manner', description: 'Responsible personnel perform control activities in a timely manner as defined by the policies and procedures.' },
            { id: 'CC5.3-POF4', title: 'Takes Corrective Action', description: 'Responsible personnel investigate and act on matters identified as a result of executing control activities.' },
          ],
        },
      ],
    },
    {
      code: 'CC6',
      name: 'Logical and Physical Access Controls',
      description: 'The entity implements logical access security software, infrastructure, and architectures over protected information assets to protect them from security events to meet the entity\'s objectives.',
      criteria: [
        {
          id: 'CC6.1',
          categoryCode: 'CC6',
          title: 'Logical Access Security Measures',
          description: 'The entity implements logical access security software, infrastructure, and architectures over protected information assets to protect them from security events to meet the entity\'s objectives.',
          pointsOfFocus: [
            { id: 'CC6.1-POF1', title: 'Identifies and Manages the Inventory of Information Assets', description: 'The entity identifies, inventories, classifies, and manages information assets.' },
            { id: 'CC6.1-POF2', title: 'Restricts Logical Access', description: 'Logical access to information assets, including hardware, data (at-rest, during processing, or in transmission), software, administrative authorities, mobile devices, output, and offline system components is restricted through the use of access control software and rule sets.' },
            { id: 'CC6.1-POF3', title: 'Identifies and Authenticates Users', description: 'Persons, infrastructure and software are identified and authenticated prior to accessing information assets, whether locally or remotely.' },
            { id: 'CC6.1-POF4', title: 'Considers Network Segmentation', description: 'Network segmentation permits unrelated portions of the entity\'s information system to be isolated from each other.' },
            { id: 'CC6.1-POF5', title: 'Manages Points of Access', description: 'Points of access by outside entities and the types of data that flow through the points of access are identified, inventoried, and managed.' },
            { id: 'CC6.1-POF6', title: 'Restricts Access to Information Assets', description: 'Combinations of data classification, separate data structures, port restrictions, access protocol restrictions, user identification, and digital certificates are used to establish access-control rules for information assets.' },
            { id: 'CC6.1-POF7', title: 'Manages Identification and Authentication', description: 'Identification and authentication requirements are established, documented, and managed for individuals and systems accessing entity information, infrastructure, and software.' },
          ],
        },
        {
          id: 'CC6.2',
          categoryCode: 'CC6',
          title: 'Prior to Issuing System Credentials',
          description: 'Prior to issuing system credentials and granting system access, the entity registers and authorizes new internal and external users whose access is administered by the entity.',
          pointsOfFocus: [
            { id: 'CC6.2-POF1', title: 'Controls Access Credentials to Protected Assets', description: 'Information asset access credentials are created based on an authorization from the system\'s asset owner or authorized custodian.' },
            { id: 'CC6.2-POF2', title: 'Removes Access to Protected Assets When Appropriate', description: 'Processes are in place to remove credential access when an individual no longer requires such access.' },
            { id: 'CC6.2-POF3', title: 'Reviews Appropriateness of Access Credentials', description: 'The appropriateness of access credentials is reviewed on a periodic basis for unnecessary and inappropriate individuals with credentials.' },
          ],
        },
        {
          id: 'CC6.3',
          categoryCode: 'CC6',
          title: 'Role-Based Access Control',
          description: 'The entity authorizes, modifies, or removes access to data, software, functions, and other protected information assets based on roles, responsibilities, or the system design and changes.',
          pointsOfFocus: [
            { id: 'CC6.3-POF1', title: 'Creates or Modifies Access to Protected Information Assets', description: 'Processes are in place to create or modify access to protected information assets based on authorization from the asset\'s owner.' },
            { id: 'CC6.3-POF2', title: 'Removes Access to Protected Information Assets', description: 'Processes are in place to remove access to protected information assets when an individual no longer requires access.' },
            { id: 'CC6.3-POF3', title: 'Uses Role-Based Access Controls', description: 'Role-based access control is utilized to support segregation of incompatible functions.' },
            { id: 'CC6.3-POF4', title: 'Reviews Access Roles and Rules', description: 'The appropriateness of access roles and rules is assessed on a periodic basis for unnecessary, inappropriate, or unused access to data, software, and functions.' },
          ],
        },
        {
          id: 'CC6.4',
          categoryCode: 'CC6',
          title: 'Physical Access Restrictions',
          description: 'The entity restricts physical access to facilities and protected information assets (for example, data center facilities, backup media storage, and other sensitive locations) to authorized personnel.',
          pointsOfFocus: [
            { id: 'CC6.4-POF1', title: 'Creates or Modifies Physical Access', description: 'Processes are in place to create or modify physical access to facilities such as data centers, office spaces, and work areas, based on authorization from the system\'s asset owner.' },
            { id: 'CC6.4-POF2', title: 'Removes Physical Access', description: 'Processes are in place to remove access to physical resources when an individual no longer requires such access.' },
            { id: 'CC6.4-POF3', title: 'Reviews Physical Access', description: 'Processes are in place to periodically review physical access to ensure consistency with job responsibilities.' },
            { id: 'CC6.4-POF4', title: 'Manages Physical Access Boundaries', description: 'Physical access to sensitive areas within facilities is managed.' },
          ],
        },
        {
          id: 'CC6.5',
          categoryCode: 'CC6',
          title: 'Logical Access Removal',
          description: 'The entity discontinues logical and physical protections over physical assets only after the ability to read or recover data and software from those assets has been diminished and is no longer required.',
          pointsOfFocus: [
            { id: 'CC6.5-POF1', title: 'Identifies Data and Software for Disposal', description: 'Procedures are in place to identify data and software stored on equipment to be disposed of.' },
            { id: 'CC6.5-POF2', title: 'Removes Data and Software From Entity Control', description: 'Procedures are in place to remove data and software from equipment to be removed from entity control.' },
          ],
        },
        {
          id: 'CC6.6',
          categoryCode: 'CC6',
          title: 'Logical Access Security Measures for External Threats',
          description: 'The entity implements logical access security measures to protect against threats from sources outside its system boundaries.',
          pointsOfFocus: [
            { id: 'CC6.6-POF1', title: 'Restricts Access', description: 'The types of activities that can occur through a communication channel (for example, FTP site, router, and sandbox) are restricted.' },
            { id: 'CC6.6-POF2', title: 'Protects Identification and Authentication Credentials', description: 'Identification and authentication credentials are protected during transmission outside its system boundaries.' },
            { id: 'CC6.6-POF3', title: 'Requires Additional Authentication or Credentials', description: 'Additional authentication information or credentials are required when accessing the system from outside its boundaries.' },
            { id: 'CC6.6-POF4', title: 'Implements Boundary Protection Systems', description: 'Boundary protection systems (for example, firewalls, demilitarized zones, and intrusion detection systems) are implemented to protect external access points from attempts and unauthorized access.' },
          ],
        },
        {
          id: 'CC6.7',
          categoryCode: 'CC6',
          title: 'Restricts Transmission of Data',
          description: 'The entity restricts the transmission, movement, and removal of information to authorized internal and external users and processes, and protects it during transmission, movement, or removal.',
          pointsOfFocus: [
            { id: 'CC6.7-POF1', title: 'Restricts the Ability to Perform Transmission', description: 'Data loss prevention processes and technologies are used to restrict ability to authorize and execute transmission, movement, and removal of information.' },
            { id: 'CC6.7-POF2', title: 'Uses Encryption Technologies or Secure Communication Channels to Protect Data in Transit', description: 'Cryptographic protections, such as transport layer security (TLS), are used over public networks.' },
            { id: 'CC6.7-POF3', title: 'Protects Removal Media', description: 'Encryption is used to protect data stored on portable devices and media.' },
            { id: 'CC6.7-POF4', title: 'Protects Mobile Devices', description: 'Processes are in place to protect mobile devices.' },
          ],
        },
        {
          id: 'CC6.8',
          categoryCode: 'CC6',
          title: 'Prevention or Detection of Unauthorized or Malicious Software',
          description: 'The entity implements controls to prevent or detect and act upon the introduction of unauthorized or malicious software.',
          pointsOfFocus: [
            { id: 'CC6.8-POF1', title: 'Restricts Installation and Execution of Unauthorized Software', description: 'The ability to install or execute software programs that have not been authorized is restricted.' },
            { id: 'CC6.8-POF2', title: 'Detects Unauthorized Changes to Software and Configuration Parameters', description: 'Processes are in place to detect changes to software and configuration parameters that may be indicative of unauthorized or malicious software.' },
            { id: 'CC6.8-POF3', title: 'Uses a Defined Change Control Process', description: 'A management-defined change control process is used for the implementation of software.' },
            { id: 'CC6.8-POF4', title: 'Uses Antivirus and Anti-Malware Software', description: 'Antivirus and anti-malware software is implemented and maintained to provide for the interception or detection and remediation of malware.' },
            { id: 'CC6.8-POF5', title: 'Scans Information Assets from Outside the Entity for Malware and Other Unauthorized Software', description: 'Procedures are in place to scan information assets that have been transferred or returned to the entity\'s custody for malware and other unauthorized software and to remove any items detected prior to its implementation on the network.' },
          ],
        },
      ],
    },
    {
      code: 'CC7',
      name: 'System Operations',
      description: 'The entity detects and monitors for new vulnerabilities and threats, evaluates events, and responds to security incidents.',
      criteria: [
        {
          id: 'CC7.1',
          categoryCode: 'CC7',
          title: 'Vulnerability Management',
          description: 'To meet its objectives, the entity uses detection and monitoring procedures to identify (1) changes to configurations that result in the introduction of new vulnerabilities, and (2) susceptibilities to newly discovered vulnerabilities.',
          pointsOfFocus: [
            { id: 'CC7.1-POF1', title: 'Uses Defined Configuration Standards', description: 'Management has established baseline configurations for IT technologies.' },
            { id: 'CC7.1-POF2', title: 'Monitors Infrastructure and Software', description: 'The entity monitors infrastructure and software for noncompliance with the standards.' },
            { id: 'CC7.1-POF3', title: 'Implements Change-Detection Mechanisms', description: 'The IT infrastructure includes a change-detection mechanism (for example, file integrity monitoring tools) to alert personnel to unauthorized modifications of critical system files, configuration files, or content files.' },
            { id: 'CC7.1-POF4', title: 'Detects Unknown or Unauthorized Components', description: 'Procedures are in place to detect the introduction of unknown or unauthorized components.' },
            { id: 'CC7.1-POF5', title: 'Conducts Vulnerability Scans', description: 'The entity conducts vulnerability scans designed to identify potential vulnerabilities or misconfigurations on a periodic basis and after any significant change in the environment.' },
          ],
        },
        {
          id: 'CC7.2',
          categoryCode: 'CC7',
          title: 'Monitors System Components for Anomalous Behavior',
          description: 'The entity monitors system components and the operation of those components for anomalies that are indicative of malicious acts, natural disasters, and errors affecting the entity\'s ability to meet its objectives.',
          pointsOfFocus: [
            { id: 'CC7.2-POF1', title: 'Implements Detection Policies, Procedures, and Tools', description: 'Detection policies and procedures are defined and implemented, and detection tools are implemented on infrastructure and software to identify anomalies in the operation or unusual activity on systems.' },
            { id: 'CC7.2-POF2', title: 'Designs Detection Measures', description: 'Detection measures are designed to identify anomalies that could result from actual or attempted (1) compromise of physical barriers; (2) unauthorized actions of authorized personnel; (3) use of compromised identification and authentication credentials; (4) unauthorized access from outside the system boundaries; (5) compromise of authorized external parties; and (6) implementation or connection of unauthorized hardware and software.' },
            { id: 'CC7.2-POF3', title: 'Implements Filters to Analyze Anomalies', description: 'Management has implemented procedures to filter, summarize, and analyze anomalies to identify security events.' },
            { id: 'CC7.2-POF4', title: 'Monitors Detection Tools for Effective Operation', description: 'Management has implemented processes to monitor the effectiveness of detection tools.' },
          ],
        },
        {
          id: 'CC7.3',
          categoryCode: 'CC7',
          title: 'Evaluates Security Events',
          description: 'The entity evaluates security events to determine whether they could or have resulted in a failure of the entity to meet its objectives (security incidents) and, if so, takes actions to prevent or address such failures.',
          pointsOfFocus: [
            { id: 'CC7.3-POF1', title: 'Responds to Security Incidents', description: 'Procedures are in place for responding to security incidents and evaluating the effectiveness of those responses.' },
            { id: 'CC7.3-POF2', title: 'Communicates and Reviews Detected Security Events', description: 'Detected security events are communicated to and reviewed by the individuals responsible for the management of the security program and actions are taken, if appropriate.' },
            { id: 'CC7.3-POF3', title: 'Develops and Implements Procedures to Analyze Security Incidents', description: 'Procedures are in place to analyze security incidents and determine system impact.' },
            { id: 'CC7.3-POF4', title: 'Assesses the Completeness of Response Activities', description: 'Management evaluates issues identified during security incident response activities to determine whether there are gaps or deficiencies in the entity\'s system of internal control.' },
          ],
        },
        {
          id: 'CC7.4',
          categoryCode: 'CC7',
          title: 'Responds to Security Incidents',
          description: 'The entity responds to identified security incidents by executing a defined incident-response program to understand, contain, remediate, and communicate security incidents.',
          pointsOfFocus: [
            { id: 'CC7.4-POF1', title: 'Assigns Roles and Responsibilities', description: 'Roles and responsibilities for the design and execution of the incident-response program are assigned.' },
            { id: 'CC7.4-POF2', title: 'Contains Security Incidents', description: 'Procedures are in place to contain security incidents that actively threaten entity objectives.' },
            { id: 'CC7.4-POF3', title: 'Mitigates Ongoing Security Incidents', description: 'Procedures are in place to mitigate the effects of ongoing security incidents.' },
            { id: 'CC7.4-POF4', title: 'Ends Threats Posed by Security Incidents', description: 'Procedures are in place to end the threats posed by security incidents through closure of the vulnerability, removal of unauthorized access, and other remediation actions.' },
            { id: 'CC7.4-POF5', title: 'Restores Operations', description: 'Procedures are in place to restore data and business operations to an interim state that permits the achievement of key objectives.' },
            { id: 'CC7.4-POF6', title: 'Develops and Implements Communication Protocols for Security Incidents', description: 'Internal and external communication and reporting of the entity\'s response to security incidents are defined and implemented.' },
            { id: 'CC7.4-POF7', title: 'Obtains Understanding of Nature of Incident and Determines Containment Strategy', description: 'An understanding of the nature (for example, the class of attack, the actor, and the motive) and severity of the security incident is developed.' },
          ],
        },
        {
          id: 'CC7.5',
          categoryCode: 'CC7',
          title: 'Identifies, Develops, and Implements Activities to Recover from Security Incidents',
          description: 'The entity identifies, develops, and implements activities to recover from identified security incidents.',
          pointsOfFocus: [
            { id: 'CC7.5-POF1', title: 'Restores the Affected Environment', description: 'Procedures are in place to restore the affected environment to functional operation.' },
            { id: 'CC7.5-POF2', title: 'Communicates Information About the Event', description: 'Communications about the nature of the incident, recovery actions taken, and other relevant information are provided to management and others as deemed appropriate.' },
            { id: 'CC7.5-POF3', title: 'Determines Root Cause of the Event', description: 'Root cause analysis is performed to determine the cause of the security incident.' },
            { id: 'CC7.5-POF4', title: 'Implements Changes to Prevent and Detect Recurrences', description: 'Additional architecture or control changes are implemented to prevent and detect a recurrence.' },
            { id: 'CC7.5-POF5', title: 'Improves Response and Recovery Procedures', description: 'Lessons learned from security incidents are used to improve incident response and recovery procedures.' },
          ],
        },
      ],
    },
    {
      code: 'CC8',
      name: 'Change Management',
      description: 'The entity authorizes, designs, develops or acquires, configures, documents, tests, approves, and implements changes to infrastructure, data, software, and procedures to meet its objectives.',
      criteria: [
        {
          id: 'CC8.1',
          categoryCode: 'CC8',
          title: 'Change Management Process',
          description: 'The entity authorizes, designs, develops or acquires, configures, documents, tests, approves, and implements changes to infrastructure, data, software, and procedures to meet its objectives.',
          pointsOfFocus: [
            { id: 'CC8.1-POF1', title: 'Manages Changes Throughout the System Life Cycle', description: 'A process for managing system changes throughout the life cycle of the system and its components (infrastructure, data, software, and procedures) is used to support system availability and processing integrity.' },
            { id: 'CC8.1-POF2', title: 'Authorizes Changes', description: 'A process is in place to authorize system changes prior to development.' },
            { id: 'CC8.1-POF3', title: 'Designs and Develops Changes', description: 'A process is in place to design and develop system changes.' },
            { id: 'CC8.1-POF4', title: 'Documents Changes', description: 'A process is in place to document system changes to support ongoing maintenance of the system and to support customers\' system description.' },
            { id: 'CC8.1-POF5', title: 'Tracks System Changes', description: 'A process is in place to track system changes from initiation through implementation.' },
            { id: 'CC8.1-POF6', title: 'Configures Software', description: 'A process is in place to select and deploy software updates and patches.' },
            { id: 'CC8.1-POF7', title: 'Tests System Changes', description: 'A process is in place to test system changes prior to implementation.' },
            { id: 'CC8.1-POF8', title: 'Approves System Changes', description: 'A process is in place to approve system changes prior to implementation.' },
            { id: 'CC8.1-POF9', title: 'Deploys System Changes', description: 'A process is in place to implement approved system changes.' },
            { id: 'CC8.1-POF10', title: 'Identifies and Evaluates System Changes', description: 'Objectives affected by the system changes are identified, and the change is evaluated for the effect the change will have on the system and its ability to meet the objectives.' },
            { id: 'CC8.1-POF11', title: 'Creates Baseline Configuration of IT Technology', description: 'A process is in place to create and maintain a baseline configuration of IT and control systems and software.' },
          ],
        },
      ],
    },
    {
      code: 'CC9',
      name: 'Risk Mitigation',
      description: 'The entity identifies, selects, and develops risk mitigation activities for risks arising from potential business disruptions and the use of vendors and business partners.',
      criteria: [
        {
          id: 'CC9.1',
          categoryCode: 'CC9',
          title: 'Risk Mitigation Activities',
          description: 'The entity identifies, selects, and develops risk mitigation activities for risks arising from potential business disruptions.',
          pointsOfFocus: [
            { id: 'CC9.1-POF1', title: 'Considers Mitigation of Risks of Business Disruption', description: 'Risk mitigation activities include the development of planned policies, procedures, communications, and alternative processing solutions to respond to, mitigate, and recover from security events that could affect the entity\'s ability to achieve its objectives.' },
            { id: 'CC9.1-POF2', title: 'Considers the Use of Insurance to Mitigate Financial Impact Risks', description: 'The entity\'s risk management activities include the consideration of the use of insurance to offset the financial impact of losses due to unexpected events that would otherwise impair the entity\'s ability to meet its objectives.' },
          ],
        },
        {
          id: 'CC9.2',
          categoryCode: 'CC9',
          title: 'Vendor and Business Partner Risk',
          description: 'The entity assesses and manages risks associated with vendors and business partners.',
          pointsOfFocus: [
            { id: 'CC9.2-POF1', title: 'Establishes Requirements for Vendor and Business Partner Engagements', description: 'The entity has established requirements for vendor and business partner engagements that include (1) the scope of services and product specifications, (2) roles and responsibilities, (3) compliance requirements, and (4) service levels.' },
            { id: 'CC9.2-POF2', title: 'Assesses Vendor and Business Partner Risks', description: 'The entity assesses, on a periodic basis, the risks that vendors and business partners (and those entities\' vendors and business partners) represent to the achievement of the entity\'s objectives.' },
            { id: 'CC9.2-POF3', title: 'Assigns Responsibility and Accountability for Managing Vendors and Business Partners', description: 'The entity assigns responsibility and accountability for the management of risks associated with vendors and business partners.' },
            { id: 'CC9.2-POF4', title: 'Establishes Communication Protocols for Vendors and Business Partners', description: 'The entity establishes communication and resolution protocols for service or product failures provided by vendors and business partners.' },
          ],
        },
      ],
    },
    {
      code: 'A1',
      name: 'Availability',
      description: 'The entity\'s system availability for operation and use is maintained as committed or agreed.',
      criteria: [
        {
          id: 'A1.1',
          categoryCode: 'A1',
          title: 'Capacity Management',
          description: 'The entity maintains, monitors, and evaluates current processing capacity and use of system components (infrastructure, data, and software) to manage capacity demand and to enable the implementation of additional capacity to help meet its objectives.',
          pointsOfFocus: [
            { id: 'A1.1-POF1', title: 'Measures Current Usage', description: 'The use of the system components is measured to establish a baseline and to identify unusual activity.' },
            { id: 'A1.1-POF2', title: 'Forecasts Capacity', description: 'The expected average and peak use of system components is projected based on capacity measurements, historical usage, and expected changes in use to plan for the potential need for increased capacity.' },
            { id: 'A1.1-POF3', title: 'Makes Changes Based on Forecasts', description: 'The need for additional capacity is evaluated based on forecasts and additional capacity is added when forecasted usage is expected to approach capacity limitations.' },
          ],
        },
        {
          id: 'A1.2',
          categoryCode: 'A1',
          title: 'Environmental Threats',
          description: 'The entity authorizes, designs, develops or acquires, implements, operates, approves, maintains, and monitors environmental protections, software, data back-up processes, and recovery infrastructure to meet its availability commitments and system requirements.',
          pointsOfFocus: [
            { id: 'A1.2-POF1', title: 'Protects Against Environmental Threats', description: 'Protection against environmental threats, including safeguards against fire, floods, earthquakes, and other disasters, is implemented at both primary and offsite locations.' },
            { id: 'A1.2-POF2', title: 'Establishes and Maintains Data Back-Up Processes', description: 'Data back-up processes are established and maintained to meet the entity\'s recovery time objective (RTO) and recovery point objective (RPO).' },
            { id: 'A1.2-POF3', title: 'Designs Detection Measures for Environmental Threats', description: 'Detection measures are implemented to identify events that could impair system availability, including measures to detect environmental threats.' },
          ],
        },
        {
          id: 'A1.3',
          categoryCode: 'A1',
          title: 'Recovery Plan',
          description: 'The entity tests recovery plan procedures supporting system availability to meet its objectives.',
          pointsOfFocus: [
            { id: 'A1.3-POF1', title: 'Implements Business Continuity Plan Testing', description: 'Business continuity plan testing is performed and includes objectives, components of the entity\'s system, and scenarios that consider the most reasonably likely business disruptions.' },
            { id: 'A1.3-POF2', title: 'Tests Backup Recovery', description: 'Backup data recovery procedures are periodically tested.' },
            { id: 'A1.3-POF3', title: 'Provides for Restoration', description: 'Procedures and mechanisms are in place to restore the system to its last available, uncorrupted state in the event of a catastrophic disaster or other significant disruption.' },
          ],
        },
      ],
    },
    {
      code: 'PI1',
      name: 'Processing Integrity',
      description: 'System processing is complete, valid, accurate, timely, and authorized to meet the entity\'s objectives.',
      criteria: [
        {
          id: 'PI1.1',
          categoryCode: 'PI1',
          title: 'Processing Objectives',
          description: 'The entity obtains or generates, uses, and communicates relevant, quality information regarding the objectives related to processing, including definitions of data processed and product and service specifications, to support the use of products and services.',
          pointsOfFocus: [
            { id: 'PI1.1-POF1', title: 'Communicates Processing Specifications', description: 'Specifications of the data processed and of the products and services provided by the entity are developed and communicated to authorized users to support the proper use of those products and services.' },
            { id: 'PI1.1-POF2', title: 'Updates Processing Specifications', description: 'Specifications of data processed by the entity and of the products and services provided are updated as needed to address changes in the entity\'s objectives and components.' },
          ],
        },
        {
          id: 'PI1.2',
          categoryCode: 'PI1',
          title: 'System Inputs',
          description: 'The entity implements policies and procedures over system inputs, including controls over completeness and accuracy, to result in products, services, and reporting to meet the entity\'s objectives.',
          pointsOfFocus: [
            { id: 'PI1.2-POF1', title: 'Defines Characteristics of Processing Inputs', description: 'The completeness, accuracy, timeliness, and authorization of inputs are defined.' },
            { id: 'PI1.2-POF2', title: 'Evaluates Processing Inputs', description: 'Inputs are evaluated to ensure they meet defined input requirements.' },
            { id: 'PI1.2-POF3', title: 'Resolves Input Processing Exceptions', description: 'Exceptions, rejections, and errors, including those involving completeness, accuracy, and timeliness of inputs, are evaluated and resolved.' },
          ],
        },
        {
          id: 'PI1.3',
          categoryCode: 'PI1',
          title: 'Processing Completeness and Accuracy',
          description: 'The entity implements policies and procedures over system processing to result in products, services, and reporting to meet the entity\'s objectives.',
          pointsOfFocus: [
            { id: 'PI1.3-POF1', title: 'Defines Data Processing Requirements', description: 'The completeness, accuracy, timeliness, and authorization of data processing is defined.' },
            { id: 'PI1.3-POF2', title: 'Uses Automated Controls When Applicable', description: 'Automated controls are used, where applicable, to support the completeness, accuracy, and timeliness of processing.' },
            { id: 'PI1.3-POF3', title: 'Produces Resulting Measures', description: 'The entity produces summary measures of each data set processed to enable identification of processing errors.' },
          ],
        },
        {
          id: 'PI1.4',
          categoryCode: 'PI1',
          title: 'System Output',
          description: 'The entity implements policies and procedures to make available or deliver output completely, accurately, and timely in accordance with specifications to meet the entity\'s objectives.',
          pointsOfFocus: [
            { id: 'PI1.4-POF1', title: 'Protects Output', description: 'Protection of output is provided during preparation, storage, and delivery.' },
            { id: 'PI1.4-POF2', title: 'Distributes Output Only to Intended Parties', description: 'Policies and procedures exist to ensure output is distributed only to intended parties.' },
            { id: 'PI1.4-POF3', title: 'Distributes Output Completely and Accurately', description: 'Policies and procedures exist to ensure output is distributed completely and accurately.' },
          ],
        },
        {
          id: 'PI1.5',
          categoryCode: 'PI1',
          title: 'Stored Data Integrity',
          description: 'The entity implements policies and procedures to store inputs, items in processing, and outputs completely, accurately, and timely in accordance with system specifications to meet the entity\'s objectives.',
          pointsOfFocus: [
            { id: 'PI1.5-POF1', title: 'Protects Stored Items', description: 'Policies and procedures are in place to protect stored items from unauthorized access and modification, and to ensure the completeness, accuracy, timeliness, and authorization of stored items.' },
            { id: 'PI1.5-POF2', title: 'Archives and Protects System Records', description: 'System records are archived and protected in accordance with policies.' },
          ],
        },
      ],
    },
    {
      code: 'C1',
      name: 'Confidentiality',
      description: 'Information designated as confidential is protected as committed or agreed.',
      criteria: [
        {
          id: 'C1.1',
          categoryCode: 'C1',
          title: 'Identifies and Maintains Confidential Information',
          description: 'The entity identifies and maintains confidential information to meet the entity\'s objectives related to confidentiality.',
          pointsOfFocus: [
            { id: 'C1.1-POF1', title: 'Identifies Confidential Information', description: 'Procedures are in place to identify information designated as confidential in accordance with the entity\'s policies.' },
            { id: 'C1.1-POF2', title: 'Retains Confidential Information', description: 'Policies and procedures are implemented to protect confidential information from unauthorized access and disclosure throughout its retention period.' },
          ],
        },
        {
          id: 'C1.2',
          categoryCode: 'C1',
          title: 'Disposes of Confidential Information',
          description: 'The entity disposes of confidential information to meet the entity\'s objectives related to confidentiality.',
          pointsOfFocus: [
            { id: 'C1.2-POF1', title: 'Identifies Confidential Information for Destruction', description: 'Procedures are in place to identify confidential information requiring destruction in accordance with the entity\'s retention schedule.' },
            { id: 'C1.2-POF2', title: 'Destroys Confidential Information', description: 'Procedures are in place to destroy confidential information in a manner that prevents its recovery.' },
            { id: 'C1.2-POF3', title: 'Destroys Confidential Information on Third-Party Systems', description: 'Procedures are in place to identify confidential information stored on third-party systems and request its disposal.' },
          ],
        },
      ],
    },
    {
      code: 'P1',
      name: 'Privacy — Notice and Communication of Objectives',
      description: 'The entity provides notice to data subjects about its objectives related to privacy.',
      criteria: [
        {
          id: 'P1.1',
          categoryCode: 'P1',
          title: 'Privacy Notice',
          description: 'The entity provides notice to data subjects about its privacy objectives related to the collection, use, retention, disclosure, and disposal of personal information.',
          pointsOfFocus: [
            { id: 'P1.1-POF1', title: 'Provides Notice About the Collection of Personal Information', description: 'Notice is provided to data subjects about the collection of personal information and the use and disclosure of that information.' },
            { id: 'P1.1-POF2', title: 'Provides Notice About the Changes in Privacy Practices', description: 'Notice is provided and consent is obtained, when required, if there are changes to the entity\'s privacy practices.' },
            { id: 'P1.1-POF3', title: 'Provides Notice About Use of Technology for Tracking Purposes', description: 'Notice is provided to data subjects when the entity uses tracking technology.' },
          ],
        },
      ],
    },
    {
      code: 'P2',
      name: 'Privacy — Choice and Consent',
      description: 'The entity communicates choices available regarding the collection, use, retention, disclosure, and disposal of personal information to data subjects and obtains implicit or explicit consent with respect to the collection, use, retention, disclosure, and disposal of personal information.',
      criteria: [
        {
          id: 'P2.1',
          categoryCode: 'P2',
          title: 'Choice and Consent',
          description: 'The entity communicates choices available to data subjects and obtains consent, as appropriate, with respect to the collection, use, retention, disclosure, and disposal of personal information.',
          pointsOfFocus: [
            { id: 'P2.1-POF1', title: 'Communicates to Data Subjects', description: 'Data subjects are informed about (1) the choices available to them with respect to the collection, use, and disclosure of personal information, and (2) the consequences, if any, of the exercise of those choices.' },
            { id: 'P2.1-POF2', title: 'Obtains Implicit or Explicit Consent', description: 'Consent is obtained from data subjects at or before the time of collection of personal information or as soon as practicable thereafter.' },
            { id: 'P2.1-POF3', title: 'Documents and Obtains Consent for New Purposes and Uses', description: 'If personal information is to be used for purposes not previously identified in the privacy notice, the new purpose is documented and consent is obtained before it is used.' },
          ],
        },
      ],
    },
    {
      code: 'P3',
      name: 'Privacy — Collection of Personal Information',
      description: 'The entity collects personal information only for the purposes identified in the notice.',
      criteria: [
        {
          id: 'P3.1',
          categoryCode: 'P3',
          title: 'Collection',
          description: 'Personal information is collected consistent with the entity\'s objectives related to privacy.',
          pointsOfFocus: [
            { id: 'P3.1-POF1', title: 'Limits the Collection of Personal Information', description: 'The collection of personal information is limited to that which is adequate, relevant, and necessary for the purposes identified in the entity\'s privacy commitments and system requirements.' },
            { id: 'P3.1-POF2', title: 'Collects Information by Fair and Lawful Means', description: 'Methods of collecting personal information are reviewed by management to confirm that personal information is obtained (1) fairly, without deception or coercion, and (2) lawfully.' },
          ],
        },
        {
          id: 'P3.2',
          categoryCode: 'P3',
          title: 'Explicit Consent',
          description: 'For information requiring explicit consent, the entity communicates the need for such consent and obtains the consent prior to collection of the information.',
          pointsOfFocus: [
            { id: 'P3.2-POF1', title: 'Identifies Information Requiring Explicit Consent', description: 'Personal information requiring explicit consent under the entity\'s privacy policies and procedures is identified.' },
            { id: 'P3.2-POF2', title: 'Obtains Explicit Consent', description: 'Explicit consent is obtained prior to or at the time of collection of personal information requiring explicit consent.' },
          ],
        },
      ],
    },
    {
      code: 'P4',
      name: 'Privacy — Use, Retention, and Disposal',
      description: 'The entity limits the use of personal information to the purposes identified in the privacy notice and for which consent was obtained. The entity retains personal information for the time necessary to fulfill the stated purposes.',
      criteria: [
        {
          id: 'P4.1',
          categoryCode: 'P4',
          title: 'Use of Personal Information',
          description: 'The entity limits the use of personal information to the purposes identified in the privacy notice and for which explicit consent was obtained, if required.',
          pointsOfFocus: [
            { id: 'P4.1-POF1', title: 'Limits Use of Personal Information to Defined Purposes', description: 'The use of personal information is limited to the purposes identified in the privacy notice.' },
            { id: 'P4.1-POF2', title: 'Uses Personal Information for New Purposes Only After Updating Notice and Obtaining Consent', description: 'If personal information is to be used for purposes not previously identified in the privacy notice, the notice is revised and consent is obtained for the new purposes.' },
          ],
        },
        {
          id: 'P4.2',
          categoryCode: 'P4',
          title: 'Retention of Personal Information',
          description: 'The entity retains personal information consistent with the entity\'s objectives related to privacy.',
          pointsOfFocus: [
            { id: 'P4.2-POF1', title: 'Retains Personal Information', description: 'Personal information is retained for no longer than necessary to fulfill the stated purposes, unless a law or regulation specifically requires otherwise.' },
            { id: 'P4.2-POF2', title: 'Protects Personal Information in a Retention Repository', description: 'Personal information is protected in a data repository during the retention period.' },
          ],
        },
        {
          id: 'P4.3',
          categoryCode: 'P4',
          title: 'Disposal of Personal Information',
          description: 'The entity disposes of personal information consistent with the entity\'s objectives related to privacy.',
          pointsOfFocus: [
            { id: 'P4.3-POF1', title: 'Disposes of Personal Information', description: 'Personal information that is no longer retained is anonymized, disposed of, or destroyed in a manner that prevents loss, theft, misuse, or unauthorized access.' },
          ],
        },
      ],
    },
    {
      code: 'P5',
      name: 'Privacy — Access',
      description: 'The entity grants identified and authenticated data subjects the ability to access their stored personal information for review and, upon request, provides physical or electronic copies of that information to data subjects.',
      criteria: [
        {
          id: 'P5.1',
          categoryCode: 'P5',
          title: 'Data Subject Access Requests',
          description: 'The entity grants identified and authenticated data subjects the ability to access their stored personal information and provides copies upon request.',
          pointsOfFocus: [
            { id: 'P5.1-POF1', title: 'Provides Access to Personal Information', description: 'Authenticated data subjects are provided with the ability to determine whether the entity maintains personal information about them.' },
            { id: 'P5.1-POF2', title: 'Provides Access to Complete and Accurate Personal Information', description: 'Authenticated data subjects are provided access to their personal information in understandable form.' },
          ],
        },
        {
          id: 'P5.2',
          categoryCode: 'P5',
          title: 'Correction of Personal Information',
          description: 'The entity corrects, amends, or appends personal information based on information provided by data subjects and communicates related information to third parties.',
          pointsOfFocus: [
            { id: 'P5.2-POF1', title: 'Corrects Personal Information', description: 'Processes exist to correct or update inaccurate or incomplete personal information when requested by data subjects.' },
            { id: 'P5.2-POF2', title: 'Communicates Denial of Access Requests', description: 'If the request to access or correct personal information is denied, the denial and reason for the denial are communicated to the data subject.' },
          ],
        },
      ],
    },
    {
      code: 'P6',
      name: 'Privacy — Disclosure and Notification',
      description: 'The entity discloses personal information to third parties with the consent of data subjects, and such disclosures are consistent with the terms of the privacy notice.',
      criteria: [
        {
          id: 'P6.1',
          categoryCode: 'P6',
          title: 'Disclosure to Third Parties',
          description: 'The entity discloses personal information to third parties with the consent of data subjects.',
          pointsOfFocus: [
            { id: 'P6.1-POF1', title: 'Discloses Personal Information Only for Identified Purposes', description: 'Personal information is disclosed to third parties only for purposes consistent with those identified in the entity\'s privacy notice.' },
            { id: 'P6.1-POF2', title: 'Discloses Personal Information Only to Appropriate Third Parties', description: 'Personal information is disclosed only to third parties who have agreed to process such information in conformance with the entity\'s privacy objectives.' },
          ],
        },
        {
          id: 'P6.2',
          categoryCode: 'P6',
          title: 'Disclosure of Purposes to Third Parties',
          description: 'The entity creates and retains a complete, accurate, and timely record of authorized disclosures of personal information.',
          pointsOfFocus: [
            { id: 'P6.2-POF1', title: 'Creates and Retains Record of Authorized Disclosures', description: 'A record of authorized disclosures of personal information is created and retained.' },
          ],
        },
        {
          id: 'P6.3',
          categoryCode: 'P6',
          title: 'Disclosure to Government Agencies',
          description: 'The entity discloses personal information to government authorities only when required by law or when permitted by the privacy policy and procedures of the entity.',
          pointsOfFocus: [
            { id: 'P6.3-POF1', title: 'Discloses Information to Government Agencies Only When Required by Law', description: 'Personal information is disclosed to government agencies or other legal entities only as required by law or in compliance with the entity\'s privacy policies and procedures.' },
          ],
        },
        {
          id: 'P6.4',
          categoryCode: 'P6',
          title: 'Third-Party Notification of Disputes',
          description: 'The entity notifies third parties of data subjects\' disputes and corrective actions are taken, as appropriate.',
          pointsOfFocus: [
            { id: 'P6.4-POF1', title: 'Informs Third Parties of Personal Information Disputes', description: 'Third parties that received personal information are informed of disputes, corrections, and updates.' },
          ],
        },
        {
          id: 'P6.5',
          categoryCode: 'P6',
          title: 'Third-Party Privacy Agreements',
          description: 'The entity obtains privacy commitments from vendors and other third parties who have access to personal information.',
          pointsOfFocus: [
            { id: 'P6.5-POF1', title: 'Obtains Commitments From Third Parties', description: 'Contracts or agreements are in place with third parties that have access to personal information, establishing how they will use, protect, and dispose of such information.' },
          ],
        },
        {
          id: 'P6.6',
          categoryCode: 'P6',
          title: 'Notification of Unauthorized Disclosure',
          description: 'The entity provides notification of breaches and incidents to affected data subjects, regulators, and others to meet the entity\'s objectives related to privacy.',
          pointsOfFocus: [
            { id: 'P6.6-POF1', title: 'Provides Notification of Unauthorized Disclosure', description: 'Processes are in place to identify and notify affected data subjects and regulators about unauthorized disclosures of personal information in a timely manner.' },
          ],
        },
        {
          id: 'P6.7',
          categoryCode: 'P6',
          title: 'Disclosure in Business Transfers',
          description: 'The entity provides notification of the transfer of personal information to a third party in the event of a merger, acquisition, or sale.',
          pointsOfFocus: [
            { id: 'P6.7-POF1', title: 'Provides Notification of Disclosure in Business Transfers', description: 'When personal information is transferred to a third party as a result of a merger, acquisition, or sale of assets, data subjects are notified.' },
          ],
        },
      ],
    },
    {
      code: 'P7',
      name: 'Privacy — Quality',
      description: 'The entity collects and maintains accurate, up-to-date, complete, and relevant personal information to meet the entity\'s objectives related to privacy.',
      criteria: [
        {
          id: 'P7.1',
          categoryCode: 'P7',
          title: 'Data Quality',
          description: 'The entity collects and maintains accurate, up-to-date, complete, and relevant personal information to meet the entity\'s objectives related to privacy.',
          pointsOfFocus: [
            { id: 'P7.1-POF1', title: 'Ensures Accuracy and Completeness of Personal Information', description: 'The entity ensures accuracy and completeness of personal information at the point of collection and when processing transactions or providing services to data subjects.' },
            { id: 'P7.1-POF2', title: 'Provides Mechanism for Updating Personal Information', description: 'Data subjects are able to update or correct their personal information.' },
          ],
        },
      ],
    },
    {
      code: 'P8',
      name: 'Privacy — Monitoring and Enforcement',
      description: 'The entity monitors compliance with its privacy policies and procedures and has procedures to address privacy-related complaints and disputes.',
      criteria: [
        {
          id: 'P8.1',
          categoryCode: 'P8',
          title: 'Privacy Monitoring and Enforcement',
          description: 'The entity monitors compliance with its privacy objectives and procedures and addresses privacy-related inquiries, complaints, and disputes.',
          pointsOfFocus: [
            { id: 'P8.1-POF1', title: 'Performs Routine Compliance Reviews and Monitoring', description: 'Ongoing monitoring of adherence to the entity\'s privacy policies and procedures is conducted.' },
            { id: 'P8.1-POF2', title: 'Provides Mechanism for Inquiries and Complaints', description: 'A process for receiving, addressing, and resolving inquiries, complaints, and disputes from data subjects related to their personal information is established.' },
            { id: 'P8.1-POF3', title: 'Documents and Reports Compliance Review Results', description: 'Results of privacy compliance reviews are documented and reported to management.' },
            { id: 'P8.1-POF4', title: 'Implements a Process for Addressing Adverse Results', description: 'A process to remediate or mitigate instances of noncompliance identified during privacy compliance reviews is in place.' },
          ],
        },
      ],
    },
  ],
};
